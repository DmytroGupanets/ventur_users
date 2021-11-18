import React from "react";
import { useForm } from "react-hook-form";
import { addNewUser } from "../../services/usersApi";
import { AddUserFormStyled } from "./AddUserFormStyled";

const AddUserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onHandleSubmit = async (data) => {
    const result = await addNewUser(data);

    reset(result);
  };

  return (
    <AddUserFormStyled>
      <form className="form" onSubmit={handleSubmit(onHandleSubmit)}>
        <label className="form__label">
          Name
          <input
            className="form__input"
            {...register("name", {
              required: "Name field is required",
            })}
            type="text"
          />
          <p className="form__errors">{errors.name?.message}</p>
        </label>

        <label className="form__label">
          Email
          <input
            className="form__input"
            {...register("email", { required: "Email field is required" })}
            type="text"
          />
          <p className="form__errors">{errors.email?.message}</p>
        </label>

        <label className="form__label">
          Gender
          <select
            className="form__input"
            {...register("gender", { required: "Select gender" })}
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className="form__errors">{errors.gender?.message}</p>
        </label>

        <label className="form__label">
          Status
          <input
            className="form__input"
            {...register("status", {
              pattern: /^(active|inactive)$/,
              required: "Status field is required",
            })}
            type="text"
          />
          {errors.status && (
            <p className="form__errors">
              {errors.status?.message
                ? errors.status?.message
                : "Only active or inactive status is permitted"}
            </p>
          )}
        </label>

        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </AddUserFormStyled>
  );
};

export default AddUserForm;
