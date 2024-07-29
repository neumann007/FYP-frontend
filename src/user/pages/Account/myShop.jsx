import { useEffect } from "react";
import { useHttpClient } from "../../../Shared/hooks/http-hook";
import { useParams } from "react-router-dom";
import ErrorModal from "../../../Shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../Shared/components/UIElements/LoadingSpinner";

const MyCounter = () => {
  const [loadedProducts, setLoadedProducts] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const sId = useParams().sid;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/products/store/${sId}`
        );
        setLoadedProducts(responseData.products);
      } catch (error) {}
    };
    fetchProducts();
  }, [sendRequest, sId]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
    </React.Fragment>
  );
};

export default MyCounter;
