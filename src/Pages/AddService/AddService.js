import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://tranquil-sea-27022.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h2>please add a service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", { required: true, maxLength: 20 })}
          placeholder="name"
        />
        <textarea {...register("description")} />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="image url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
