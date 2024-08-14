import { useState } from "react";
import "./index.css";
import QUESTIONS from "../../../DATAS";

let totalPoint = 0;
const QuizApp = () => {
  const [step, setStep] = useState(0);
  let [flag, setFlag] = useState(true);
  const handleStep = () => {
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
      setFlag((flag = true));
    }
  };
  const calcPoint = (index) => {
    if (QUESTIONS[step].correctOption == index) {
      totalPoint += QUESTIONS[step].points;
    }
    // console.log(index);
    if (QUESTIONS.length - 1 === step) {
      Swal.fire({
        imageUrl:
          "https://img.freepik.com/premium-vector/congratulations-lettering-message-vector-greeting_7233-463.jpg",
        imageWidth: 400,
        imageHeight: 200,
        title: `Your total point is : ${totalPoint}
        
        ${
          totalPoint >= 80
            ? "Luckily You are passed"
            : " Unfortunately You are faild"
        }
        `,
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#f2f2f2",
        backdrop: `rgba(213, 43, 255, 0.4)`,
      });
    }
  };

  const flagForStyles = () => {
    setFlag((flag = false));
  };
  const correctAnswerStyle = (index) => {
    if (QUESTIONS[step].correctOption === index) {
      return "bg-success text-light content-after";
    } else {
      return "bg-danger text-light";
    }
  };
  const answerClicked = () => {
    setAnswer((answer = true));
  };
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <section className="bg-dark w-100 d-flex flex-column justify-content-center align-items-center gap-3">
      <h3 className="text-light">{QUESTIONS[step].question}</h3>
      <ul className="w-50 question-container ">
        {QUESTIONS[step].options.map((option, index) => {
          return (
            <li
              className={`cursor-pointer fw-bold fs-5 text-light ${
                !flag ? `disabled-item  ${correctAnswerStyle(index)} ` : ""
              }`}
              onClick={() => {
                calcPoint(index);
                flagForStyles();
                answerClicked();
              }}
            >
              {option}
            </li>
          );
        })}
      </ul>
      <div className="w-50 d-flex justify-content-end align-items-center gap-3">
        <button
          className={`btn btn-outline-light fs-5 btn-lg ${
            step === QUESTIONS.length - 1 ? "disabled" : ""
          }`}
          onClick={handleStep}
        >
          Next
        </button>
        {QUESTIONS.length - 1 === step && (
          <button
            className="btn btn-outline-warning fs-5 btn-lg"
            onClick={handleRefresh}
          >
            Restart
          </button>
        )}
      </div>
    </section>
  );
};
export default QuizApp;
