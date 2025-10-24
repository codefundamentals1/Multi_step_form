import React, { useState } from "react";
import { plans } from "./formcont";
import { Step1, Step2, Step3, Step4 } from "./Steps";
import styles from "./ParentForm.module.css";
import axios from "axios";

const ParentForm = () => {
  const submitFormData = async () => {
    try {
      const res = await axios.post("/api/form", formdata);
      console.log("form submitted",res.data);
      alert("submitted")
      setFormdata({
        firstName: "",
        lastName: "",
        age: "",
        phoneNo: "",
        address: "",
        plan: "",
        agree: false,
      });
      setStep(1);
    } catch (error) {
      setError("something is wrong")
      console.log("Error form not submitted ");
      console.error(error);

    }
  };
  const [error, setError] = useState("");
  const steps = [
    {
      id: 1,
      firstName: (val) => setFormdata({ ...formdata, firstName: val }),
      lastName: (val) => setFormdata({ ...formdata, lastName: val }),
      age: (val) => setFormdata({ ...formdata, age: val }),
    },
    {
      id: 2,
      phoneNo: (val) => setFormdata({ ...formdata, phoneNo: val }),
      address: (val) => setFormdata({ ...formdata, address: val }),
    },
    {
      id: 3,
      plan: (val) => setFormdata({ ...formdata, plan: val }),
    },
    {
      id: 4,
      agree: (val) => setFormdata({ ...formdata, agree: val }),
    },
  ];

  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phoneNo: "",
    address: "",
    plan: "",
    agree: false,
  });
  const [step, setStep] = useState(1);
  const handlePrev = () => {
    if (step != 1) setStep(step - 1);
  };

  const handleNext = () => {
    let hasError = false;

    if (step === 1) {
      if (!formdata.firstName || !formdata.lastName || !formdata.age) {
        setError("Please fill all required fields in Step 1.");
        hasError = true;
      }
    } else if (step === 2) {
      if (!formdata.phoneNo || !formdata.address) {
        setError("Please fill all required fields in Step 2.");
        hasError = true;
      }
    } else if (step === 3) {
      if (!formdata.plan) {
        setError("Please select a plan.");
        hasError = true;
      }
    } else if (step === 4) {
      if (!formdata.agree) {
        setError("You must agree before submitting.");
        hasError = true;
      }
    }

    if (hasError) return; 

    setError(""); 

    if (step < steps.length) {
      setStep(step + 1);
    } else {
      submitFormData();
    }
  };

  const renderStep = (step) => {
    switch (step) {
      case 1:
        return (
          <Step1
            formdata={formdata}
            firstName={steps[0].firstName}
            lastName={steps[0].lastName}
            age={steps[0].age}
            error={error}
          />
        );
      case 2:
        return (
          <Step2
            formdata={formdata}
            phoneNo={steps[1].phoneNo}
            address={steps[1].address}
            error={error}
          />
        );
      case 3:
        return <Step3 formdata={formdata} plan={steps[2].plan} error={error} />;
      case 4:
        return (
          <Step4 formdata={formdata} agree={steps[3].agree} error={error} />
        );
      default:
        return <DefaultStep />;
    }
  };
  function progress() {
    return (step / steps.length) * 100;
  }

  return (
    <>
      <div className={styles.rootcontainer}>
        <div className={styles.container}>
          <div>
            <span className={styles.stepText}>
              Step {step} of {steps.length}
            </span>
            <div className={styles.progressWrapper}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${progress()}%` }}
                ></div>
              </div>
            </div>

            <div className={styles.formbox}>{renderStep(step)}</div>
          </div>

          <div className={styles.navbuttons}>
            <button onClick={handlePrev} disabled={step === 1}>
              Prev
            </button>
            <button onClick={handleNext}>
              {step === steps.length ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentForm;
