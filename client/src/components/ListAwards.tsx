import { AwardsType, ListAwardsProps } from "../types/listAwards";
import Star from "../assets/star.png";

const ListAward: React.FC<ListAwardsProps> = ({ listAward }) => {
  return (
    <div className="container_awards">
      {listAward.length ? (
        listAward.map((award: AwardsType) => (
          <div key={award.id}>
            <div className="box_awards">
              <div className="point">
                {new Intl.NumberFormat("id-ID", {
                  currency: "IDR",
                }).format(award.requiredPoint)}{" "}
                poin
              </div>
              <div>
                <div className="type">{award.type}</div>
              </div>
            </div>
            <p className="name">{award.name}</p>
          </div>
        ))
      ) : (
        <div className="empty">
          <div>
            <img src={Star} alt="Awards" />
          </div>

          <span>Awards not found</span>
        </div>
      )}
    </div>
  );
};

export default ListAward;
