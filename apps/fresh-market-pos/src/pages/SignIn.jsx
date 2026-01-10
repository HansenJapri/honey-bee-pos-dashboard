
import { useNavigate, Link } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-text-main dark:text-white">
            <div className="flex flex-1 flex-col justify-center px-4 py-8 sm:px-6 lg:flex-none lg:px-16 xl:px-20 bg-white dark:bg-background-dark w-full lg:w-[45%] xl:w-[40%] relative z-10 shadow-xl lg:shadow-none h-screen overflow-y-auto">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="size-10 text-primary">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
                                <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h1 className="text-text-main dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Honey Bee Ponsel & Stationary</h1>
                    </div>
                    <div className="mb-10">
                        <p className="text-text-main dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-3">Welcome Back</p>
                        <p className="text-text-secondary dark:text-gray-400 text-base font-normal leading-normal">Please enter your details to access your financial dashboard.</p>
                    </div>
                    <form onSubmit={handleSignIn} className="space-y-5">
                        <div className="flex flex-col w-full">
                            <p className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal pb-1.5">Email Address</p>
                            <input className="block w-full rounded-lg text-text-main dark:text-white dark:bg-gray-800 focus:outline-0 focus:ring-0 border border-border-light dark:border-gray-700 bg-white focus:border-primary dark:focus:border-primary h-11 placeholder:text-text-secondary px-3 py-2 text-sm font-normal leading-normal transition-colors shadow-sm" placeholder="name@groceryfin.com" type="email" />
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex justify-between items-center pb-1.5">
                                <p className="text-text-main dark:text-gray-200 text-sm font-medium leading-normal">Password</p>
                            </div>
                            <div className="relative flex w-full rounded-lg shadow-sm">
                                <input className="block w-full rounded-l-lg text-text-main dark:text-white dark:bg-gray-800 focus:outline-0 focus:ring-0 border border-border-light dark:border-gray-700 bg-white focus:border-primary dark:focus:border-primary h-11 placeholder:text-text-secondary px-3 py-2 border-r-0 text-sm font-normal leading-normal transition-colors z-10" placeholder="Enter your password" type="password" />
                                <div className="text-text-secondary dark:text-gray-400 flex border border-border-light dark:border-gray-700 bg-white dark:bg-gray-800 items-center justify-center px-3 rounded-r-lg border-l-0 cursor-pointer hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <a className="text-text-secondary dark:text-primary/80 text-sm font-medium leading-normal hover:text-primary hover:underline transition-all" href="#">Forgot Password?</a>
                        </div>
                        <div>
                            <button className="flex w-full justify-center items-center rounded-lg bg-primary h-14 px-3 py-1.5 text-base font-bold leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors" type="submit">
                                Sign In
                            </button>
                        </div>
                        <div className="relative">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border-light dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white dark:bg-background-dark px-2 text-sm text-text-secondary dark:text-gray-500">Or</span>
                            </div>
                        </div>
                        <div>
                            <button className="flex w-full justify-center items-center gap-3 rounded-lg bg-white dark:bg-gray-800 h-14 px-3 py-1.5 text-base font-bold leading-6 text-text-main dark:text-white shadow-sm ring-1 ring-inset ring-border-light dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 transition-colors" type="button">
                                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
                                    <path d="M12.0003 20.45c4.6667 0 8.45-3.7833 8.45-8.45 0-4.6667-3.7833-8.45-8.45-8.45-4.6667 0-8.45 3.7833-8.45 8.45 0 4.6667 3.7833 8.45 8.45 8.45Z" fill="#fff" fillOpacity="0"></path>
                                    <path d="M12.4286 11.2341v2.7932h3.9304c-.1598.8687-.9789 2.5484-3.9304 2.5484-2.362 0-4.2917-1.9546-4.2917-4.364s1.9297-4.364 4.2917-4.364c1.336 0 2.2285.5701 2.7388 1.0583l2.2066-2.227C15.9696 5.5684 14.341 4.7002 12.4286 4.7002c-4.148 0-7.5109 3.4211-7.5109 7.6393s3.3629 7.6393 7.5109 7.6393c3.7801 0 6.3262-2.6565 6.3262-6.4385 0-.5737-.0617-1.0101-.1372-1.442h-6.189Z" fill="#4285F4"></path>
                                </svg>
                                Sign in with Google
                            </button>
                        </div>
                    </form>
                    <div className="mt-8 pt-6 border-t border-border-light dark:border-gray-800">
                        <p className="text-center text-sm text-text-secondary dark:text-gray-400">
                            New to GroceryFin?
                            <Link to="/create-account" className="font-bold text-primary hover:text-primary-dark ml-1 transition-colors">Create Account</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block bg-background-dark">
                <img alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0jWtdzp7w-Q161e7SZDgdeW0mkxIz2oUJdNbW6pf3n1HB3PdsyLrJSbkrAw1DmnXcyrwri3FBMJJnAltvsiV8l41fzqguf01J8geO-ACWZKLzU5YBDsGpoXobPINsEJBhCWQzpJ93gtN3n63LWqEA4gRCYkzlyth72hwxR9CNw122o7zD9-d3SdLubPvnlKAL90UMFBP20IdmP8lm0aowsTBWy7Xy1dCbmQV16tR3XVepDvgfZeNuox-gmdqlZERQJCY8iSxqqbbH" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 right-0 p-20 text-white">
                    <div className="flex items-center gap-2 mb-6 opacity-80">
                        <span className="material-symbols-outlined">trending_up</span>
                        <span className="text-sm font-bold uppercase tracking-widest">Financial Insights</span>
                    </div>
                    <blockquote className="text-3xl font-bold leading-tight max-w-2xl">
                        "GroceryFin has revolutionized how we manage our store's cash flow and inventory tracking. It's the clarity we needed."
                    </blockquote>
                    <div className="mt-8 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/10">
                            <span className="material-symbols-outlined text-white">storefront</span>
                        </div>
                        <div>
                            <p className="text-base font-semibold">Sarah Jenkins</p>
                            <p className="text-sm text-white/60">CFO, FreshMarket Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
