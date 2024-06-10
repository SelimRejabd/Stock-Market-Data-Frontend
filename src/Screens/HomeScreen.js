import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStockData, setPage } from '../features/stock/slice/StockSlice';
import StockTable from '../components/StockTable';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { stockData, loading, page, totalPages } = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(fetchStockData(page));
  }, [dispatch, page]);

  const handlePrevious = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4 text-center">STOCK MARKET DATA</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <StockTable data={stockData} />
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 text-white mr-10 px-4 py-2 rounded"
              onClick={handlePrevious}
              disabled={page === 1}
            >
              Previous
            </button>
            <p className="text-lg">
              Page {page} of {totalPages}
            </p>
            <button
              className="bg-blue-500 text-white ml-10 px-4 py-2 rounded items-center"
              onClick={handleNext}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
