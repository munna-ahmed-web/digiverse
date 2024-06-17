import { useState } from "react";

const NearestHospitalPagination = ({
  totalPost,
  postPerPage,
  currentPage,
  changePage,
}) => {
  const totalPages = Math.ceil(totalPost / postPerPage);
  const buttonsToShow = 5;

  const getPaginationItems = () => {
    const items = [];
    let startPage = Math.max(1, currentPage - Math.floor(buttonsToShow / 2));

    for (let number = startPage; number < startPage + buttonsToShow; number++) {
      if (number <= totalPages) {
        items.push(
          <button
            key={number}
            className={
              number === currentPage
                ? "h_paginate_number active_pagi"
                : "h_paginate_number"
            }
            onClick={() => changePage(number)}
          >
            {number}
          </button>
        );
      }
    }
    return items;
  };

  const handleDecrement = () => {
    if (currentPage <= 1) {
      return;
    } else {
      changePage(currentPage - 1);
    }
  };

  const handleIncrement = () => {
    if (currentPage >= totalPages) {
      return;
    } else {
      changePage(currentPage + 1);
    }
  };

  return (
    <div className="h_paginate">
      <div className="h_paginate_list">
          <button className="h_paginate_left pnr" onClick={handleDecrement}>
            <i className="fa-solid fa-angle-left"></i>
            <span className="pagi_text">PREV</span>
          </button>
        {/* show all the paginations button here */}
        {getPaginationItems()}

          <button className="h_paginate_right pnr" onClick={handleIncrement}>
            <span className="pagi_text">NEXT</span>
            <i className="fa-solid fa-angle-right"></i>
          </button>
      </div>
    </div>
  );
};

export default NearestHospitalPagination;
