import {
  ALL_FILTER_STATE,
  DONE_FILTER_STATE,
  UNDONE_FILTER_STATE,
} from "../constants/appConstants";
import SharedBtn from "./SharedButton";

function FilterBtns({ filterBtnClick }) {
  return (
    <div className="buttons">
      <SharedBtn
        className="sharedBtn"
        onClick={() => filterBtnClick(ALL_FILTER_STATE)}
        name="All"
      />
      <SharedBtn
        className="sharedBtn"
        onClick={() => filterBtnClick(DONE_FILTER_STATE)}
        name="Done"
      />
      <SharedBtn
        className="sharedBtn"
        onClick={() => filterBtnClick(UNDONE_FILTER_STATE)}
        name="Undone"
      />
    </div>
  );
}

export default FilterBtns;
