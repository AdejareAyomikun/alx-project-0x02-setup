import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";


const About = () =>{
      const handleButtonClick = (buttonName: string) => {
    alert(`You clicked the ${buttonName} button!`);
  };

    return(
        <>
            <Header/>
          <main className="mx-auto mt-4 p-4 text-center container">
        <h1 className="mb-4 font-bold text-3xl">About Us</h1>
        <p className="mb-6 text-gray-700">
          This is the About page. Here, we demonstrate our versatile Button
          component.
        </p>

        <h2 className="mb-4 font-semibold text-2xl">Button Examples:</h2>

        <div className="flex flex-col items-center gap-4">
          {/* Small, rounded-sm Button */}
          <Button
            size="small"
            shape="rounded-sm"
            onClick={() => handleButtonClick("Small Squared")}
          >
            Small Button
          </Button>

          {/* Medium, rounded-md Button */}
          <Button
            size="medium"
            shape="rounded-md"
            onClick={() => handleButtonClick("Medium Rounded")}
          >
            Medium Button
          </Button>

          {/* Large, rounded-full Button */}
          <Button
            size="large"
            shape="rounded-full"
            onClick={() => handleButtonClick("Large Circular")}
          >
            Large Button
          </Button>

          {/* Example of a disabled button */}
          <Button size="medium" shape="rounded-md" disabled={true}>
            Disabled Button
          </Button>

          {/* Example with custom class (Tailwind class added to demonstration) */}
          <Button
            size="medium"
            shape="rounded-md"
            className="bg-purple-500 hover:bg-purple-600 shadow-lg" // Example custom Tailwind classes
            onClick={() => handleButtonClick("Custom Styled")}
          >
            Custom Styled
          </Button>
        </div>
      </main>
        </>
    )
}

export default About;