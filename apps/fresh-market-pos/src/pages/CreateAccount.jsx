import { Link } from 'react-router-dom';

export default function CreateAccount() {
    return (
        <div className="relative min-h-screen flex flex-col lg:flex-row w-full bg-background-light dark:bg-background-dark font-display text-[#111816] dark:text-white antialiased overflow-x-hidden">
            <div className="flex flex-col flex-1 bg-white dark:bg-[#111816] px-6 py-6 sm:px-8 lg:px-16 xl:px-20 justify-center transition-colors duration-300">
                <div className="mb-10 flex items-center gap-3">
                    <div className="text-primary size-8">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-[#111816] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Honey Bee Ponsel & Stationary</h2>
                </div>
                <div className="flex flex-col gap-3 mb-8">
                    <h1 className="text-[#111816] dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Create your account</h1>
                    <p className="text-[#61897c] text-base font-normal leading-normal">Start managing your store's finances better today.</p>
                </div>
                <form action="#" className="flex flex-col gap-4">
                    <label className="flex flex-col w-full">
                        <p className="text-[#111816] dark:text-white text-sm font-medium leading-normal pb-1.5">Full Name</p>
                        <input className="block w-full rounded-lg text-[#111816] dark:text-white focus:outline-0 border border-[#dbe6e2] dark:border-white/20 bg-white dark:bg-white/5 focus:border-primary focus:ring-1 focus:ring-primary h-11 placeholder:text-[#61897c] px-3 py-2 text-sm font-normal leading-normal transition-all shadow-sm" placeholder="e.g. John Doe" type="text" />
                    </label>
                    <label className="flex flex-col w-full">
                        <p className="text-[#111816] dark:text-white text-sm font-medium leading-normal pb-1.5">Email Address</p>
                        <input className="block w-full rounded-lg text-[#111816] dark:text-white focus:outline-0 border border-[#dbe6e2] dark:border-white/20 bg-white dark:bg-white/5 focus:border-primary focus:ring-1 focus:ring-primary h-11 placeholder:text-[#61897c] px-3 py-2 text-sm font-normal leading-normal transition-all shadow-sm" placeholder="name@grocery.com" type="email" />
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="flex flex-col w-full relative group">
                            <p className="text-[#111816] dark:text-white text-sm font-medium leading-normal pb-1.5">Password</p>
                            <div className="relative">
                                <input className="block w-full rounded-lg text-[#111816] dark:text-white focus:outline-0 border border-[#dbe6e2] dark:border-white/20 bg-white dark:bg-white/5 focus:border-primary focus:ring-1 focus:ring-primary h-11 placeholder:text-[#61897c] px-3 py-2 pr-10 text-sm font-normal leading-normal transition-all shadow-sm" placeholder="Min. 8 characters" type="password" />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-[#61897c] hover:text-primary cursor-pointer">
                                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                                </div>
                            </div>
                        </label>
                        <label className="flex flex-col w-full relative">
                            <p className="text-[#111816] dark:text-white text-sm font-medium leading-normal pb-1.5">Confirm Password</p>
                            <div className="relative">
                                <input className="block w-full rounded-lg text-[#111816] dark:text-white focus:outline-0 border border-[#dbe6e2] dark:border-white/20 bg-white dark:bg-white/5 focus:border-primary focus:ring-1 focus:ring-primary h-11 placeholder:text-[#61897c] px-3 py-2 text-sm font-normal leading-normal transition-all shadow-sm" placeholder="Repeat password" type="password" />
                            </div>
                        </label>
                    </div>
                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-[#10b77f] hover:bg-[#0ea06f] text-[#111816] text-sm font-bold leading-normal tracking-[0.015em] transition-colors mt-1 shadow-sm">
                        <span className="truncate">Create Account</span>
                    </button>
                    <div className="relative flex py-2 items-center w-full">
                        <div className="flex-grow border-t border-[#f0f4f3] dark:border-white/10"></div>
                        <span className="flex-shrink-0 mx-4 text-sm font-medium text-[#61897c]">Or</span>
                        <div className="flex-grow border-t border-[#f0f4f3] dark:border-white/10"></div>
                    </div>
                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-[#f0f4f3] dark:bg-white/5 hover:bg-[#e0e8e6] dark:hover:bg-white/10 transition-colors text-[#111816] dark:text-white gap-3 text-sm font-bold leading-normal tracking-[0.015em] border border-transparent dark:border-white/10" type="button">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.52 12.29C23.52 11.43 23.4418 10.7091 23.3 10.02H12V14.5091H18.5918C18.32 15.96 17.43 17.16 16.0882 18.06V21.0018H20.01C22.3309 18.89 23.64 15.7709 23.52 12.29Z" fill="#4285F4"></path>
                            <path d="M12 24C15.24 24 17.96 22.92 19.95 21.08L16.0909 18.06C15.0109 18.81 13.62 19.23 12 19.23C8.84182 19.23 6.16091 17.13 5.21182 14.3H1.14818V17.4109C3.12 21.3109 7.23 24 12 24Z" fill="#34A853"></path>
                            <path d="M5.20909 14.29C4.96091 13.56 4.82182 12.79 4.82182 12C4.82182 11.2 4.96091 10.43 5.20909 9.7V6.59003H1.14818C0.411818 8.08003 0 9.99003 0 12C0 14.01 0.411818 15.92 1.14818 17.41L5.20909 14.29Z" fill="#FBBC05"></path>
                            <path d="M12 4.77C13.7209 4.77 15.2809 5.37 16.5218 6.52L19.9909 3.05C17.8909 1.1 15.1709 0 12 0C7.23 0 3.12 2.69 1.14818 6.59L5.20909 9.7C6.16091 6.86 8.84182 4.77 12 4.77Z" fill="#EA4335"></path>
                        </svg>
                        <span className="truncate">Sign in with Google</span>
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <p className="text-[#61897c] text-sm">
                        Already have an account?
                        <Link className="text-[#10b77f] font-bold hover:underline transition-all ml-1" to="/">Sign In</Link>
                    </p>
                </div>
            </div>
            <div className="hidden lg:flex flex-1 relative bg-background-dark overflow-hidden flex-col justify-center items-center p-12">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img alt="Grocery Store Aisle" className="w-full h-full object-cover" data-alt="Blurred view of a modern grocery store aisle with fresh produce shelves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuJCOgXnx15Ez_EsYd01vzBV4PSIJUR5a-v1GOdztt3bTXi2sj4vOT-o1jUObA5lOqCfB4V7aE6DgpQ5182TDlBQcIPxHzQ3-G03h7sWvWa_E03ppgW_tQhyTaYct_pZl8gqkg793ZumdGII36Ud78czCgwTSsnN_045C8ByFQJJDjP9Fs6kQIlW1EyI6Bd-uDtCrDrZNvxJH9mjXW8xVLGxUttdvXgp5pVCXPBjUGJDDAtFvkqIthf09H-mgnCGbFsEtVWgaqQ4mc" />
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#10221c] via-[#10221c]/80 to-transparent"></div>
                <div className="relative z-10 max-w-xl w-full bg-white/10 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-2xl">
                    <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center mb-8">
                        <span className="material-symbols-outlined text-primary text-2xl">monitoring</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-6 leading-snug">
                        "This dashboard completely changed how we track inventory and margins. It's essential for any modern grocer."
                    </h3>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        <div className="size-12 rounded-full overflow-hidden border-2 border-primary">
                            <img alt="User Portrait" className="w-full h-full object-cover" data-alt="Portrait of a smiling male grocery store manager" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo4R0SlvVnt6zmK3_wmfq1J0HEyQipDiAjR92jqOC399y2KB4hUNO-9DpP-pCNy0zKCfCdGSFF68_o1Yd0H9wuQ5kwPfMhkb-HekqFggb_SaJZNt76moFmun8v0PEg8qZLmXntJSl4cJ6zVI6FeK8e0zRG7hH60ZtfFQ4egbwRMELdlDak--ER2lJhuKTOgjE61nMv2BBR8cdH5RYFIzjhw2mHrm8WFs7x3FRUPSWg3IYJ4B6ASUvEsRVbmq8HSPOdvO1JuN6_keff" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-base">David Miller</span>
                            <span className="text-primary text-sm font-medium">Owner, Miller's Market</span>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 mt-12 flex gap-8 opacity-60">
                    <div className="flex items-center gap-2 text-white/80">
                        <span className="material-symbols-outlined text-xl">lock</span>
                        <span className="text-sm font-medium">256-bit Encryption</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                        <span className="material-symbols-outlined text-xl">verified_user</span>
                        <span className="text-sm font-medium">Secure Data</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
