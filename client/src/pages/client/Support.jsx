import { useForm } from "react-hook-form";
import { Send } from "lucide-react";

export default function Support() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Support Request:", data);
        alert("Support request submitted successfully!");
        reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
                <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                    Contact Support
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700">
                            Name
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                            placeholder="Your full name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                            placeholder="you@example.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700">
                            Category
                        </label>
                        <select
                            {...register("category", { required: "Category is required" })}
                            className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                        >
                            <option value="">Select a category</option>
                            <option value="technical">Technical Issue</option>
                            <option value="billing">Billing</option>
                            <option value="feature">Feature Request</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.category && (
                            <p className="text-red-500 text-sm">{errors.category.message}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700">
                            Message
                        </label>
                        <textarea
                            {...register("message", { required: "Message is required" })}
                            className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                            rows="4"
                            placeholder="Describe your issue..."
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg transition disabled:opacity-50"
                    >
                        <Send className="w-5 h-5" />
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                    </button>
                </form>
            </div>
        </div>
    );
}
