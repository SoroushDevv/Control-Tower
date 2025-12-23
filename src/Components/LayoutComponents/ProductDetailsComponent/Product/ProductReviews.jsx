import Rating from "@/Components/UI/Rating/Rating";
import { Smile } from 'lucide-react';

export default function ProductReviews() {

    const reviews = [
        {
            user: "سارا رضایی",
            rating: 5,
            comment: "کیفیت محصول عالی بود و رنگش دقیقا مثل عکس بود.",
            date: "20 دسامبر 2025",
        },
        {
            user: "علی محمدی",
            rating: 4,
            comment: "کیف خوبه اما انتظار داشتم بندش کمی بلندتر باشه.",
            date: "18 دسامبر 2025",
        },
        {
            user: "مریم کاظمی",
            rating: 3,
            comment: "کیف معمولیه، نه خیلی خوب نه بد. برای استفاده روزمره مناسبه.",
            date: "15 دسامبر 2025",
        },
        {
            user: "رضا احمدی",
            rating: 5,
            comment: "محصول فوق‌العاده است، کیفیت چرم و دوخت عالی.",
            date: "12 دسامبر 2025",
        },
        {
            user: "فاطمه حسینی",
            rating: 2,
            comment: "انتظار بیشتری داشتم، رنگ کمی با تصویر فرق داشت.",
            date: "10 دسامبر 2025",
        },
        {
            user: "محمد طاهری",
            rating: 4,
            comment: "راضی هستم، اما بسته‌بندی می‌توانست بهتر باشد.",
            date: "08 دسامبر 2025",
        },
    ];


    const RatingArray = [
                        { count: "2.3k", stars: "5 Star", percent: 46, color: "bg-yellow-400" },
                        { count: "1k", stars: "4 Star", percent: 2, color: "bg-yellow-400" },
                        { count: "1.5k", stars: "3 Star", percent: 3, color: "bg-yellow-400" },
                        { count: "2k", stars: "2 Star", percent: 70, color: "bg-yellow-400" },
                        { count: "550", stars: "1 Star", percent: 11, color: "bg-yellow-400" },
                    ]

    if (!reviews.length) {
        return (
            <div className="text-center text-gray-500 py-10">
                هنوز نظری ثبت نشده است.
            </div>
        );
    }


    return (
        <div className=" rounded-xl py-4 px-6 mt-2  dark:bg-dark-bg-surface dark:text-dark-text-primary text-light-text-primary">
            <div className="w-full py-4 px-6 text-xl font-bold flex justify-start items-center gap-1">
                <Smile className=" animate-in"/>
                <span> امتیاز کالا و نظرات کاربران</span>
              
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 rounded-xl shadow-lg mt-3 border-2 dark:border-dark-border-light">
                 <div className="w-full flex flex-col justify-center gap-3">
                    {RatingArray.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 w-full">
                            <span className="w-12 text-gray-600 text-sm font-b dark:text-dark-text-primary">{item.count}</span>
                            <div className="flex-1 rounded-full overflow-hidden w-full h-1 justify-end items-center bg-gray-300 dark:bg-gray-100 ">
                                <div className={`${item.color} border-2 border-black rounded-full transition-all duration-500 dark:border-light-border-Brand`} style={{ width: `${item.percent}%` }}/>
                            </div>
                            <span className="w-16 text-gray-600 text-sm text-right dark:text-dark-text-primary">{item.stars}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                    <span className=" text-sm font-medium">Average Rating</span>
                    <span className="text-2xl font-bold  dark:text-dark-text-primary">3</span>
                    <Rating value={3} max={5} type="scale5" className="justify-center" />
                    <span className=" text-sm">(9.12k reviews)</span>
                </div>

               
            </div>
            <div className="flex flex-col gap-6 mt-4 dark:bg-dark-bg-surface dark:text-dark-text-primary text-light-text-primary dark:border-dark-border-light">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className=" p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200 border dark:border-dark-border-light"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-light-text-secondary dark:text-dark-text-primary">{review.user}</h4>
                            <span className="text-gray-400 text-sm">{review.date}</span>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                            <Rating value={review.rating} max={5} type="scale5" />
                            <span className="text-xs border border-dark-border-light py-1 px-3 rounded-full">{review.rating}/5</span>
                        </div>

                        <p className="text-sm text-light-text-secondary dark:text-dark-text-primary">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}
