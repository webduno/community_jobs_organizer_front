import Link from "next/link"

// Sample job postings data
const postings = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Tech Innovators Inc.",
        location: "San Francisco, CA",
        description: "We are looking for a skilled software engineer to join our team.",
        requirements: ["Bachelor's degree in Computer Science", "3+ years of experience in software development", "Proficiency in JavaScript, Python"],
        salary: "$100,000 - $120,000",
        status: "Active",
        date_posted: "2024-07-01",
        applications_received: 25
    },
    {
        id: 2,
        title: "Product Manager",
        company: "Global Tech Solutions",
        location: "New York, NY",
        description: "Seeking a dynamic product manager to lead product development.",
        requirements: ["5+ years of experience in product management", "Strong leadership skills", "Experience with agile methodologies"],
        salary: "$110,000 - $130,000",
        status: "Active",
        date_posted: "2024-07-05",
        applications_received: 40
    },
    {
        id: 3,
        title: "Data Scientist",
        company: "Data Insights Corp.",
        location: "Boston, MA",
        description: "Looking for a data scientist to analyze and interpret complex data.",
        requirements: ["Master's degree in Data Science", "2+ years of experience in data analysis", "Proficiency in R, Python"],
        salary: "$90,000 - $110,000",
        status: "Pending",
        date_posted: "2024-07-10",
        applications_received: 15
    },
    {
        id: 4,
        title: "UX Designer",
        company: "Creative Solutions Ltd.",
        location: "Austin, TX",
        description: "We need a UX designer to improve user experience for our products.",
        requirements: ["Bachelor's degree in Design", "3+ years of experience in UX design", "Proficiency in Sketch, Figma"],
        salary: "$80,000 - $100,000",
        status: "Active",
        date_posted: "2024-07-12",
        applications_received: 20
    },
    {
        id: 5,
        title: "Marketing Specialist",
        company: "Brand Builders Co.",
        location: "Los Angeles, CA",
        description: "Seeking a marketing specialist to enhance our brand presence.",
        requirements: ["Bachelor's degree in Marketing", "2+ years of experience in marketing", "Strong analytical skills"],
        salary: "$70,000 - $90,000",
        status: "Closed",
        date_posted: "2024-07-08",
        applications_received: 30
    },
    {
        id: 6,
        title: "IT Support Technician",
        company: "Support Heroes Inc.",
        location: "Chicago, IL",
        description: "Looking for an IT support technician to assist with technical issues.",
        requirements: ["Associate's degree in Information Technology", "1+ years of experience in IT support", "Proficiency in Windows and Linux"],
        salary: "$50,000 - $70,000",
        status: "Active",
        date_posted: "2024-07-09",
        applications_received: 10
    }
]

const BoardSummary = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col w-full px-4 lg:px-24 text-white" style={{ background: "#040606" }} id="dashboard">
                <div className="flex flex-col pt-20 sm:pt-48 h-screen ">
                    <div className="flex gap-4  h-full">
                        <div className="h-full w-full max-w-sm">
                            <div className="flex flex-col overflow-y-hidden flex-grow   h-full  px-4 sm:px-8 py-8 rounded-[50px] min-h-96 " style={{ background: "#060b0b" }}>
                                <div className="pb-4  text-2xl">Dashboard</div>
                                <div className="overflow-y-auto flex-col">
                                    <div>
                                        <div className="flex flex-col gap-4  " >
                                            {postings.map((post) => (
                                                <div key={post.id} className="rounded-xl py-2 px-6 rounded-lg shadow-lg drop-shadow-xl" style={{ background: "#0a1111" }}>
                                                    <h3 className=" font-bold mb-2">{post.title}</h3>
                                                    <p className="text-gray-600 mb-2">{post.company}</p>
                                                    {/* <p className="text-gray-400 mb-2">{post.location}</p>
                                                    <p className="text-gray-400 mb-2">{post.description}</p>
                                                    <p className="text-gray-400 mb-2"><strong>Salary:</strong> {post.salary}</p>
                                                    <p className="text-gray-400 mb-2"><strong>Status:</strong> {post.status}</p>
                                                    <p className="text-gray-400 mb-2"><strong>Date Posted:</strong> {post.date_posted}</p>
                                                    <p className="text-gray-400 mb-2"><strong>Applications Received:</strong> {post.applications_received}</p> */}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col flex-grow w-full gap-4 ">
                            <div className=" flex flex-wrap justify-end gap-4">
                                <div className="hidden sm:block flex-grow max-w-64 px-4 sm:px-8 py-12 pt-6 rounded-[50px] h-36" style={{ background: "#060b0b" }}>
                                    <div className="">Postings</div>
                                </div>
                                <div className="hidden sm:block flex-grow max-w-64 px-4 sm:px-8 py-12 pt-6 rounded-[50px] h-36" style={{ background: "#060b0b" }}>
                                    <div className="">Applications</div>
                                </div>
                                <div className="flex-grow max-w-64 px-8 py-12 pt-6 rounded-[50px] h-36 flex flex-col justify-center text-center" 
                                    style={{ background: "#0a1111",  boxShadow: "inset 5px 5px 20px #ffffff11, inset -5px -5px 20px #000000"}}
                                >
                                    <div>Account</div>
                                </div>
                            </div>
                            <div className="flex w-full flex-grow ">
                                <div className="flex-grow  w-full  px-8 py-12 pt-6 rounded-[50px] " style={{ background: "#060b0b" }}>
                                    <div className="">Summary</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100 py-12"></div>
            </div>
        </>
    );
}

export const BoardSummaryTest = () => {
    return (
        <>
            <div className="">
                <div></div>
            </div>
        </>
    );
}

export default BoardSummary;
