
import { useParams } from "react-router-dom";

const MembersPage = () => {
  const { edition } = useParams();
  
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Integrantes - Edição {edition}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Content will be added later */}
      </div>
    </div>
  );
};

export default MembersPage;
