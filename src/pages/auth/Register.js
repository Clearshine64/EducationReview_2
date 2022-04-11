import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Input from "../../components/Input";

export default function Register() {

    const { register, handleSubmit, formState: {  isSubmitting } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (

        <div className="container max-w-sm  mb-20">
            <p className="text-4xl font-bold text-center mb-20">
                Register
            </p>
            <div className="rounded-2xl bg-neutral/10 p-8">
                <form className=" flex flex-col items-center gap-6 mb-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <p className="text-2xl text-center font-bold mb-8">Register Doctor</p>
                    <Input
                        className="input w-full"  required placeholder="full Name"
                        prepend={<Icon icon={'fa:user'} className={'text-neutral'} />}
                        {...register("fullName")}
                    />
                    <Input
                        className="input w-full " type='email' required placeholder="Email"
                        prepend={<Icon icon={'ic:round-email'} className={'text-neutral'} />}
                        {...register("email")}
                    />
                    <Input
                        className="input w-full"  required placeholder="Phone Number"
                        prepend={<Icon icon={'fa:phone'} className={'text-neutral'} />}
                        {...register("phoneNumber")}
                    />

                    <Input
                        className="input w-full" type='password' required placeholder="Password"
                        prepend={<Icon icon={'fa:lock'} className={'text-neutral'} />}
                        {...register("password")}
                    />
                    <Input
                        className="input w-full" type='password' required placeholder="Confirm Password"
                        prepend={<Icon icon={'fa:lock'} className={'text-neutral'} />}
                        {...register("confirm")}
                    />

                    <button className={`btn btn-wide text-white ${isSubmitting && 'loading'}`} type="submit">
                        register
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
                        Do you have already account?{' '}
                    </span>
                    <Link to="/auth/login" className="font-bold text-neutral">Login</Link>
                </p>
            </div>
        </div>
    )
}
