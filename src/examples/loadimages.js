import pic0 from "../ImagesFolder/pixil-frame-0.png";
import pic1 from "../ImagesFolder/pixil-frame-1.png";
import pic2 from "../ImagesFolder/pixil-frame-2.png";

export function DisplayImages(){
    return (
        <>
         <img src={pic0}/>
         <img src={pic1}/>
         <img src={pic2}/>
        </>
    )
}