import Image from "next/image";
import SectionTitle from "./SectionTitle";
const CategoryCard = ({img, name}) => {
    return (
        <article className="text-center bg-white px-3 pt-2 md:p-4 rounded-lg w-[102px] h-[102px] md:w-[162px] md:h-[162px] flex flex-col justify-center">
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] mx-auto">
                <Image src={img} width="100%" height="100%"/>
            </div>
            <SectionTitle className="truncate" text={name}/>
        </article>
    );
};

export default CategoryCard;
