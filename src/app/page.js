import { Header } from "@/app/component/Header";
import { Task } from "@/app/component/Task";
import { TaskInput } from "@/app/component/TaskInput";
import { Footer } from "@/app/component/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>

      <TaskInput></TaskInput>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <Task title="Read a book"></Task>
        <Task title="Taker a shower"></Task>
        <Task title="sleep"></Task>
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        name="Nattida Phaiboontanasan"
        ID="650610759"
      ></Footer>
    </div>
  );
}
