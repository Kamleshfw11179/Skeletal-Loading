import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function SkeletonCard(){
return (
  <section>
  <h2 className="section-title">
    <Skeleton duration={1} height={30} width={300} />
  </h2>

  <ul className="list">
    {Array(9)
      .fill()
      .map((item, index) => (
        <li className="card" key={index}>
          <Skeleton height={180} />
          <h4 className="card-title">
          <Skeleton circle={true} height={50} width={50} /> &nbsp;
            <Skeleton height={36} width={`80%`} />
          </h4>
          <p className="card-channel">
            <Skeleton width={`60%`} />
          </p>
          <div className="card-metrics">
            <Skeleton width={`90%`} />
          </div>
        </li>
      ))}
  </ul>
</section>
)
}

  export default SkeletonCard;