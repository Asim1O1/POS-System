import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Login data:", data);
        // Example: call API
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert("Logged in!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "At least 6 characters" },
                        })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                >
                    {isSubmitting ? "Logging in..." : "Login"}
                </Button>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don’t have an account? <a href="/signup" className="text-blue-500">Sign up</a>
                </p>
            </form>
        </div>
    );
}
