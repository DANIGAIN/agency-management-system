'use client'
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { modalStyles } from "@/utils/Constants";
import toast from "react-hot-toast";
import Modal from 'react-modal'
import { GlobalContext } from "@/context";
import { CreateRoleSchema, UpdateRoleSchema } from "@/schemas/roleSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RoleModal(props) {
  const [isLoading, setIsLoading] = useState(false);
  const { roles, setRoles } = useContext(GlobalContext)
  const { req, setIsOpenRole, role, isOpenRole } = props;
  const schema = !role ?  CreateRoleSchema  : UpdateRoleSchema;
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver:zodResolver(schema),
    defaultValues: role ? {
      name: role.name,
      isActive: role.isActive,
    } : {}
  });

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      if (req === 'create') {
        const res = await axios.post('/api/roles', data);
        if (res.data.success) {
          setRoles((prev) => ({...prev , data:[res.data.data, ...roles.data]}))
          toast.success(res.data?.message);
        }
      } else if (req === 'update') {
        const res = await axios.put(`/api/roles/${role._id}`, data);
        if (res.data.success) {
          const filderRole = roles.data.filter((data) => data._id !== role._id);
          setRoles((prev) => ({...prev , data:[res.data.data, ...filderRole]}))
          toast.success(res.data?.message);
        }
      }
      reset()
      setIsOpenRole(false)

    } catch (error) {
      if (!error.response.success && (error.response.status === 422 || error.response.status === 400)) {
        reset()
        setIsOpenRole(false)
        toast.error(error.response.data.message)
      }
      // console.log(error);
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }

  }
  return (

    <Modal
      isOpen={isOpenRole}
      style={modalStyles}
      contentLabel="Role Modal"
      ariaHideApp={false}
      onRequestClose={() => setIsOpenRole(false)}
    >
      <div className="flex justify-between">
        <p className="text-xl font-medium mb-4">{req} Role</p>
        <span className="text-lg pr-2 pl-40 hover:text-red"
          onClick={() => setIsOpenRole(false)}
        >X</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          {
            !errors.name ? (
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>

            ) : (

              <label
                htmlFor="name"
                className="block text-bolt  font-medium text-red"
              >
                {errors.name?.message}
              </label>
            )
          }

          <input
            type="text"
            {...register("name")}
            id="name"
            name="name"
            placeholder='Enter your name'
            className={`text-gray-700 block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-gray-400 focus:border-gray-600 ${errors.email
              ? " border-red-400"
              : " border-gray-400"
              }`}
          />
        </div>
        <div>
          <input
            id="checkbox"
            type="checkbox"
            {
            ...register('isActive')
            }
            name="isActive"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="checkbox" className="ms-2 text-sm font-medium text-gray-600 ">Make sure role is active or not</label>
        </div>

        <div>
          {!isLoading ?
            <button
              type="submit"
              className="w-full  bg-blue-500 focus:bg-blue-700  text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Submit
            </button> : <button
              type="button"
              className="w-full  bg-blue-500 focus:bg-blue-700  text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              ....
            </button>}
        </div>
      </form>


    </Modal>
  )
}