import styled from 'styled-components'
import { useForm } from "react-hook-form";

const Field = styled.div`
  margin-bottom: 10px;
`
const Error = styled.div`
  color: red;
  font-size: 13px;
`
function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: 'onChange' })

    //register('name') => {value: dasd, onChange: dasd}

    const onSubmit = (data) => {
        console.log("data", data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field>
                <input {...register('name', { required: true, minLength: 3 })}
                       type="text"
                       placeholder="Ваше имя"/>
                {errors.name && (
                    <>
                        {errors.name.type === 'required' && (
                            <Error>Заполните поле</Error>
                        )}
                        {errors.name.type === 'minLength' && (
                            <Error>Имя не может быть короче трех символов</Error>
                        )}
                    </>)}
            </Field>
            <Field>
                <input {...register('email', { required: true })} type="text" placeholder="Ваш email"/>
                {errors.email && <Error>Заполните поле</Error>}
            </Field>
            <Field>
                <input {...register('password', { required: true })} type="text" placeholder="Пароль"/>
                {errors.password && <Error>Заполните поле</Error>}
            </Field>
            <button type="submit"
                    disabled={!isValid}
            >
                Зарегистрироваться
            </button>
        </form>
    )
}

export default Register