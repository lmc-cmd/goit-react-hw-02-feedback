// import { Children } from "react"
import s from '../FeedbackOptions/FeedbackOptions.module.css';

const Section = ({ title, children }) => {
    // console.log(Children); Детей в массив и массив =>render?
//    const children = this.props.children;
  return (
    <>
      <h1 className={s.title}>{title}</h1>
      {children}
    </>
  );
};
export default Section;
