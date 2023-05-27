import style from "./news.module.css"
export default function News(props) {
  return (
    <>
    <div className={style.box}>

<div className={style.OtherInfO}>
  <div className={style.Category}>
    <div>


        {/* Category */}
      <div className={style.CategoryTitle}>{props.CategoryOfNews}</div>
    </div>

    {/* Time */}
    <div className={style.Time}>{props.PublishedAt}</div>
  </div>


  {/* Title */}
  <div className={style.Title}>{props.Title}</div>

  {/* Description */}
  <div className={style.Des}>{props.Description}</div>

    {/* linktoreadmore */}
  <div className={style.readmore}>Read More</div>
</div>
    </div>
    </>
  )
}
