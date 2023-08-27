import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
import ListAward from "../components/ListAwards";
import { AwardsType } from "../types/listAwards";
import Filter from "../components/Filter";
import axios from "axios";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [listAward, setListAward] = useState<AwardsType[]>([]);

  const [filterPoint, setFilterPoint] = useState(0);
  const [filterType, setFilterType] = useState<string[]>([]);

  const [canLoadMore, setCanLoadMore] = useState(false);
  const [offset, setOffset] = useState<number>(0);
  const limit = 5;

  useEffect(() => {
    const body = {
      offset,
      limit,
      queryRequiredPoint: filterPoint,
      queryType: filterType,
    };

    axios
      .post("http://localhost:5000/awards/list", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        const data: AwardsType[] = [];

        if (res.data) {
          for (const element of res.data) {
            data.push({
              id: element.id,
              name: element.name,
              requiredPoint: element.required_point,
              type: element.type,
            });
          }

          if (res.data.length < limit) {
            setCanLoadMore(false);
          } else {
            setCanLoadMore(true);
          }
        }

        if (offset === 0) {
          setListAward(data);
        } else {
          setListAward((current) => [...current, ...data]);
        }
      });
  }, [filterPoint, filterType, offset]);

  return (
    <div className="app">
      <header>
        <HiMenuAlt2 onClick={() => setShowSidebar(!showSidebar)} />
        <p>Awards</p>
        <BiFilter onClick={() => setShowFilter(!showFilter)} />
      </header>

      <Sidebar show={showSidebar} setShow={setShowSidebar} />
      <Filter
        show={showFilter}
        setShow={setShowFilter}
        setFilterPoint={setFilterPoint}
        setFilterType={setFilterType}
      />

      <ListAward listAward={listAward} />

      {canLoadMore && (
        <div className="load-more">
          <h4 onClick={() => setOffset(offset + limit)}>Load more</h4>
        </div>
      )}
    </div>
  );
};

export default Home;
