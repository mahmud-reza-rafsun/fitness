import Banner from "@/components/Banner";
import BMICalculator from "@/components/Bmi";
import Habit from "@/components/Habit";
import Pricing from "@/components/Pricing";
import RunSection from "@/components/RunSection";
import Teams from "@/components/Teams";

export default function Home() {
  return (
    <main>
      <Banner/>
      <Habit/>
      <RunSection/>
      <BMICalculator/>
      <Pricing/>
      <Teams/>
    </main>
  );
}
