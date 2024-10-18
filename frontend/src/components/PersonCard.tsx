import React, {useEffect}from "react";
import  '../styles/PersonCard.css'

type Props = {
    name: string,
    image: string,
    description: string
    focused: boolean
    styles: string
}

const PersonCard: React.FC<Props> = (props) => {
  useEffect(() => {
    console.log(props.name, props.focused)
  }, [])
    return (
        <div className='flex flex-col bg-white items-center min-w-[200px] text-center p-8 ml-10 mr-10 rounded-xl transition duration-450 hover:shadow-2xl'>
            <div className='flex items-center justify-center overflow-hidden w-40 h-40 rounded-full border border-black shadow-2xl'>
                <img src='../../public/8240494.jpg' alt={props.name} className='object-cover w-full h-full'/>
            </div>
            <h1 className='mt-4 m-2'>
                {props.name}
            </h1>
            <p className='text-gray-700 m-0.5 '>
                Otaniemi Fight Club is an incredible place to train and grow in martial arts! The instructors are highly skilled, approachable,
                and passionate about helping everyone improve, regardless of experience level.
            </p>
        </div>
    )
}

export default PersonCard;

