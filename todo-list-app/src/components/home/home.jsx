import "./home.css";
import MagicBtn from "./magicBtn";
import { useState, useEffect } from "react";

// header component => {تودینگ ، پسر بزرگه دوینگ}
const ContentHeader = ({ text }) => (
  <h1 className="font-fedra flex items-center justify-center">
    <i className="fi fi-br-bracket-curly-right text-purple-org"></i>
    {text}
    <i className="fi fi-br-bracket-curly text-purple-org"></i>
  </h1>
);

// paragraph (content) component
const ContentParagraph = ({ text }) => (
  <p>
    <i className="fi fi-br-quote-right ml-2 text-purple-org"></i>
    {text}
  </p>
);

// the main of component => header, paragraph, btn
const ContentSection = ({
  headerText,
  paragraphText,
  buttons,
  extraClass = "",
}) => (
  <div
    className={`container-fluid flex justify-center flex-col items-center relative text-center top-20 text-white max-w-3xl ${extraClass}`}
  >
    <ContentHeader text={headerText} />
    <ContentParagraph text={paragraphText} />
    <div className="flex w-full justify-evenly">
      {" "}
      {buttons.map((button, index) => (
        <MagicBtn key={index} content={button.content} icon={button.icon} />
      ))}
    </div>
  </div>
);

// imgs in component
const ContentImage = ({ src, alt, extraClass }) => (
  <div className="p-3">
    <img src={src} className={`size-60 relative ${extraClass}`} alt={alt} />
  </div>
);

// bluer circle for background
const ContentBlurCircle = ({ top, left }) => (
  <div
    className={`w-60 h-60 bg-purple-org rounded-full blur-3xl fixed ${top} ${left}`}
  ></div>
);

const NumberOfSteps = ({ number, status }) => (
  <span
    className={`p-2 border-2 text-background-dark custom-shadow flex items-center justify-center rounded-full font-fedra ${status === "success" ? "bg-green-950 text-green-500 border-green-500" : "bg-red-950 text-red-500 border-red-500"}`}
  >
    {number}
  </span>
);

const ContentOfSteps = ({ content, status, icon }) => (
  <div
    className={`w-80 p-4 flex items-center bg-transparent justify-center rounded-xl border-1 text-white ${status === "success" ? "bg-green-500 border-green-500" : "bg-red-500 border-red-500"}`}
  >
    {content}
    <span
      className={`mr-2 ${icon} ${status === "success" ? "text-green-500" : "text-red-500"}`}
    ></span>
  </div>
);

const CreateSteps = ({ number, content, status }) => {
  let iconClass = "";
  if (status === "success") {
    iconClass = "fa-solid fa-check-circle";
  } else {
    iconClass = "fa-solid fa-times-circle";
  }

  return (
    <div className="flex flex-col items-center">
      <NumberOfSteps number={number} status={status} />
      <span
        className={`rounded-3xl w-0.5 ${status === "success" ? "bg-green-500" : "bg-red-500"} h-20`}
      ></span>
      <ContentOfSteps content={content} status={status} icon={iconClass} />
      <span
        className={`rounded-3xl w-0.5 ${status === "success" ? "bg-green-500" : "bg-red-500"} h-20`}
      ></span>
    </div>
  );
};

const Steps = () => (
  <div className="flex items-center justify-center flex-wrap relative top-96">
    {stepsData.map((step, index) => (
      <div key={index} className="mr-4 ml-4">
        <CreateSteps
          number={step.number}
          content={step.content}
          status={step.status}
        />
      </div>
    ))}
  </div>
);

const stepsData = [
  {
    number: "1403/03/01",
    content: "سر زدن به مادربزرگ",
    icon: `<i class="fa-solid fa-circle-check"></i>`,
    status: "success",
  },
  {
    number: "1403/03/03",
    content: "یادگیری گیتار",
    icon: `<i class="fa-solid fa-circle-check"></i>`,
    status: "success",
  },
  {
    number: "1403/03/08",
    content: "ثبت نام در کلاس یوگا",
    icon: `<i class="fa-solid fa-circle-check"></i>`,
    status: "success",
  },
  {
    number: "1403/03/10",
    content: "بردن ماشین به تعمیرگاه",
    status: "success",
    icon: `<i class="fa-solid fa-circle-check"></i>`,
  },
  {
    number: "1403/03/11",
    content: "رفتن به باشگاه",
    icon: `<i class="fa-solid fa-circle-xmark"></i>`,
    status: "failed",
  },
  {
    number: "1403/03/25",
    content: "انجام کارهای عقب مانده",
    icon: `<i class="fa-solid fa-circle-xmark"></i>`,
    status: "failed",
  },
  {
    number: "1403/03/25",
    content: "غذا دادن به پتی",
    icon: `<i class="fa-solid fa-circle-check"></i>`,
    status: "success",
  },
  {
    number: "1403/03/28",
    content: "پروژه جدید",
    icon: `<i class="fa-solid fa-circle-check"></i>`,
    status: "success",
  },
  {
    number: "1403/03/30",
    content: "درست کردن شام",
    icon: `<i class="fa-solid fa-circle-xmark"></i>`,
    status: "failed",
  },
];

const CalcAdherence = ({ stepsData, setFinalResult }) => {
  useEffect(() => {
    const resultCalc = 100 / stepsData.length;
    let successDatas = 0;

    stepsData.forEach((stepsDataSuccess) => {
      if (stepsDataSuccess.status === "success") {
        successDatas++;
      }
    });

    const finalResult = successDatas * resultCalc.toFixed(1);
    setFinalResult(finalResult);
  }, [stepsData, setFinalResult]);
};

const AdherenceProgress = ({ completion }) => (
  <div className="h-3 border-2 border-green-500 rounded-full">
    <div
      className="h-2 bg-green-500 rounded-full"
      style={{ width: `${completion}%` }}
    ></div>
  </div>
);

const Adherence = () => {
  const [finalResult, setFinalResult] = useState(0);

  return (
    <div
      className={`w-100 p-14  border-t-2 relative top-96 ${finalResult >= 50 ? "border-green-500" : "border-red-500"}`}
    >
      <CalcAdherence stepsData={stepsData} setFinalResult={setFinalResult} />
      <div className="text-white p-0 m-0 flex justify-center text-3xl items-center">
        <p
          className={`${finalResult >= 50 ? "text-green-500" : "text-red-500"} font-bold`}
        >
          {finalResult} %
        </p>
      </div>
      <AdherenceProgress completion={finalResult} />
    </div>
  );
};

const Home = () => {
  const [compelation, setCompelation] = useState(0);
  // default component content
  const headerText = "تودینگ ، پسر بزرگه دوینگ";
  const paragraphText = `
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
    طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
    لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
    بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
    بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
    زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود
    در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
    حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
    اساسا مورد استفاده قرار گیرد.
  `;

  const buttons1 = [
    {
      content: "شروع کنید",
      icon: (
        <i className="fi fi-tr-journal-alt flex items-center justify-center"></i>
      ),
    },
  ];
  const buttons2 = [
    {
      content: "ایجاد تسک",
      icon: <i className="fi fi-tr-to-do flex items-center justify-center"></i>,
    },
    {
      content: "ایجاد ژورنال",
      icon: (
        <i className="fi fi-tr-journal flex items-center justify-center"></i>
      ),
    },
  ];
  const buttons3 = [
    {
      content: "ایجاد پوشه",
      icon: (
        <i className="fi fi-tr-folder-open flex items-center justify-center"></i>
      ),
    },
  ];
  // default component content /

  return (
    <div className="container max-w-6xl">
      <ContentSection
        headerText={headerText}
        paragraphText={paragraphText}
        buttons={buttons1}
      />

      <ContentBlurCircle top="top-80" left="left-2/4" />

      <div className="container px-4 text-center">
        <div className="row gx-5">
          <div className="col">
            <ContentSection
              headerText="از تودو لیست ، تا دفترچه خاطرات"
              paragraphText={paragraphText}
              buttons={buttons2}
              extraClass="top-60"
            />
          </div>
          <div className="col">
            <ContentImage
              src="src/assets/notebook.png"
              extraClass="top-40"
              alt="Notebook Image"
            />
          </div>
        </div>
      </div>

      <ContentBlurCircle top="top-90" left="left-0" />

      <div className="container px-4 text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <ContentImage
                src="src/assets/data.png"
                extraClass="top-60"
                alt="Directory Image"
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <ContentSection
                headerText={"برنامه هاتو پوشه بندی کن"}
                paragraphText={paragraphText}
                buttons={buttons3}
                extraClass="top-80"
              />
            </div>
          </div>
        </div>
      </div>
      <Steps />
      <Adherence />
    </div>
  );
};

export default Home;
