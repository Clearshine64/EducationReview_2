import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Input from "../../components/Input";

export default function Login() {

    const { register, handleSubmit, getValues, formState: { isSubmitting } } = useForm();
    const onSubmit = (data) => {
        console.log(getValues())
        console.log(data)
    }

    return (

        <div className="container max-w-sm pb-20">
            <p className="text-4xl font-bold text-center mb-20">
                Login
            </p>
            <div className="rounded-2xl bg-neutral/10  p-8 ">
                <form className=" flex flex-col items-center gap-6 mb-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <p className="text-2xl text-center font-bold mb-8">Login Doctor</p>
                    <Input
                        className="input w-full" type='email' required placeholder="Email"
                        prepend={<Icon icon={'ic:round-email'} className={'text-neutral'} />}
                        onChange={(e)=>register('email')}
                    />

                    <Input
                        className="input w-full" type='password' required placeholder="password"
                        prepend={<Icon icon={'fa:lock'} className={'text-neutral'} />}
                        register={register("password")}
                    />

                    <button className="btn-link cursor-pointer text-neutral   font-bold w-full text-right">
                        Forgot Password?
                    </button>

                    <button className={`btn btn-wide text-white ${isSubmitting && 'loading'}`} type="submit">
                        Login
                    </button>
                </form>
                <div className="flex gap-8 justify-center mb-8">
                    <button className="btn btn-secondary btn-circle ">
                        <Icon icon={'fa:facebook'} width={20} height={20} />
                    </button>
                    <button className="btn btn-error btn-circle ">
                        <Icon icon={'fa:google'} width={20} height={20} />
                    </button>
                </div>
                <p className="text-center">
                    <span>
                        Don't you have account?{' '}
                    </span>
                    <Link to="/auth/register" className="font-bold text-neutral">Register</Link>
                </p>
            </div>
        </div>
    )
}
