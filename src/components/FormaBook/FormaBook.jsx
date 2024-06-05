import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import  bookShema  from '../schemas/bookShema';
import Button from 'components/Button/Button';
import CustomInput from '../CustomInput/CuctomInput'
import styles from './formaBook.module.css';



export const FormaBook = () => {
  const submit = () => {
    window.location.reload();
  };

  const {register, handleSubmit, control, formState:{errors, isValid}  } = useForm({
    initialValues: {
             name: '',
            email: '',
           date: '',
           comment: '',
          },
    mode: "onBlur",
    resolver:yupResolver(bookShema)
  })

  return (
    <div className={styles.wrapBook}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.text}> Stay connected! We are always ready to help you.</p>

      <form className={styles.form} onSubmit={handleSubmit(submit)} autoComplete="off">
          <label className={styles.label}>
            <input className={styles.input}
            {...register('name') }
              name="name"
              placeholder='Name'
            />
            {errors?.name && (<span className={styles.span}>{errors?.name?.message || 'Errors!'}</span>)}       
          </label>        
          
          <label className={styles.label}>
            <input className={styles.input}
            {...register('email') }
              name="email"
              placeholder= 'Email'
              type="email"
            />
             {errors?.email && (<span className={styles.span}>{errors?.email?.message || 'Errors!'}</span>)}
          </label>

          <label className={styles.label} > 
                <Controller 
                 name="date"
                control={control}
                render={({ field }) => (
               <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="yyyy-MM-dd"
                customInput={<CustomInput />}
                />
                 )}
               />
               
            {errors?.date && (<span className={styles.span}>{errors?.date?.message || 'Errors!'}</span>)}
              
          </label>
      
              <label className={styles.label}>
            <textarea className={styles.textarea}
            {...register('comment') }
              name="comment"
              placeholder= 'Comment'
              type="text"
            />
             
          </label> 
          <div className={styles.btn}>
            <Button type="submit"
            disabled={!isValid}> 
              Send
            </Button>
          </div>      
         
          
        </form>

    </div>
  )
}
export default FormaBook
