import React from "react";
import { useForm } from "react-hook-form";

export default function PlanSelection() {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: { plan: "monthly" },
    });

    const selectedPlan = watch("plan");

    const onSubmit = (data) => {
        console.log("Selected plan:", data);
        alert(`You selected the ${data.plan} plan!`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Choose Your Plan
                </h2>

                {/* Plan Options */}
                <div className="space-y-4">
                    <label
                        className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition ${selectedPlan === "monthly"
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-300"
                            }`}
                    >
                        <div>
                            <p className="font-semibold">Monthly</p>
                            <p className="text-sm text-gray-600">₹1200 / month</p>
                        </div>
                        <input
                            type="radio"
                            value="monthly"
                            {...register("plan")}
                            className="form-radio text-blue-500"
                        />
                    </label>

                    <label
                        className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition ${selectedPlan === "yearly"
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-300"
                            }`}
                    >
                        <div>
                            <p className="font-semibold">Yearly</p>
                            <p className="text-sm text-gray-600">₹10000 / year</p>
                        </div>
                        <input
                            type="radio"
                            value="yearly"
                            {...register("plan")}
                            className="form-radio text-blue-500"
                        />
                    </label>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Continue
                </button>
            </form>
        </div>
    );
}
