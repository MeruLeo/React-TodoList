import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { ExampleLoaderComponent, PaletteTree } from "./palette";
import Login from "../components/account/login/login.jsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/PaletteTree">
        <PaletteTree />
      </ComponentPreview>
      <ComponentPreview path="/ExampleLoaderComponent">
        <ExampleLoaderComponent />
      </ComponentPreview>
      <ComponentPreview path="/Login">
        <Login />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
