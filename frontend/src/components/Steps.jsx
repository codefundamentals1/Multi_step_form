import React from "react";
import { plans } from "./formcont";
import styles1 from "./Step3.module.css";
import styles4 from "./Step4.module.css";

function Step1({ formdata, firstName, lastName, age, error }) {
  
  return (
    <>
      <p>First Name</p>
      <input
        required
        type="text"
        value={formdata.firstName}
        onChange={(e) => firstName(e.target.value)}
      />
      <p>Last Name</p>
      <input
        required
        type="text"
        value={formdata.lastName}
        onChange={(e) => lastName(e.target.value)}
      />
      <p>Age</p>
      <input
        required
        type="number"
        value={formdata.age}
        onChange={(e) => age(e.target.value)}
      />
            <p style={{ color: "red" }}>{error}</p>

    </>
  );
}

function Step2({ formdata, phoneNo, address, error }) {
  return (
    <>
      <p>Phone Number</p>
      <input
        required
        type="text"
        value={formdata.phoneNo}
        onChange={(e) => phoneNo(e.target.value)}
      />
      <p>Address</p>
      <input
        required
        type="text"
        value={formdata.address}
        onChange={(e) => address(e.target.value)}
      />
            <p style={{ color: "red" }}>{error}</p>

    </>
  );
}

function Step3({ formdata, plan, error }) {
  return (
    <>
      <p>Select Your Plan</p>
      <div className={styles1.planContainer}>
        {plans?.map((p) => (
          <div
            key={p.id}
            className={`${styles1.planBox} ${
              formdata.plan === p.planName ? styles1.active : ""
            }`}
            onClick={() => plan(p.planName)}
          >
            <h4>{p.planName}</h4>
            <p className={styles1.price}>{p.price}</p>
            <p className={styles1.desc}>{p.description}</p>
          </div>
        ))}
      </div>
            <p style={{ color: "red" }}>{error}</p>

    </>
  );
}

function Step4({ formdata, agree, error }) {
  return (
    <div className={styles4.reviewContainer}>
      <h3>Review Your Details</h3>

      <div className={styles4.summaryBox}>
        <div className={styles4.row}>
          <span className={styles4.label}>First Name:</span>
          <span className={styles4.value}>{formdata.firstName || "—"}</span>
        </div>
        <div className={styles4.row}>
          <span className={styles4.label}>Last Name:</span>
          <span className={styles4.value}>{formdata.lastName || "—"}</span>
        </div>
        <div className={styles4.row}>
          <span className={styles4.label}>Age:</span>
          <span className={styles4.value}>{formdata.age || "—"}</span>
        </div>
        <div className={styles4.row}>
          <span className={styles4.label}>Phone No:</span>
          <span className={styles4.value}>{formdata.phoneNo || "—"}</span>
        </div>
        <div className={styles4.row}>
          <span className={styles4.label}>Address:</span>
          <span className={styles4.value}>{formdata.address || "—"}</span>
        </div>
        <div className={styles4.row}>
          <span className={styles4.label}>Selected Plan:</span>
          <span className={styles4.value}>{formdata.plan || "—"}</span>
        </div>
      </div>

      <div className={styles4.agreeBox}>
        <label>
          <input
            type="checkbox"
            checked={formdata.agree}
            onChange={(e) => agree(e.target.checked)}
          />{" "}
          I agree to the <a href="#">terms and conditions</a>
        </label>
      </div>
            <p style={{ color: "red" }}>{error}</p>

    </div>
    
  );
}

export { Step1, Step2, Step3, Step4 };
