import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";
import axios from "axios";

const ShowData = () => {
  const { college } = useParams();
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const fil = filtered.filter((teacher) => teacher.id == searchTerm);
    setFiltered(fil);
  };
  useEffect(() => {
    const filterCollege = async () => {
      let filCollege = await axios.get(
        `https://newserversis.onrender.com/api/teacher/college/${college}`
      );
      // console.log(filCollege.data);
      setFiltered(filCollege.data);
    };
    filterCollege();
  }, [college, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-300">
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-2">
            {college ? `${college} Faculty` : "Teacher Directory"}
          </h1>
          <p className="text-lg text-amber-600">
            Discover our talented educators and their areas of expertise
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12 bg-white rounded-xl shadow-lg p-6">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="number"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by college ID..."
              className="flex-grow py-3 px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-l-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Button
              name="Search"
              className="py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
            />
          </form>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4">
          {filtered.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-6">
                <h3 className="text-2xl font-bold text-white">
                  {teacher.fullName}
                </h3>
                <p className="text-amber-100">{teacher.college}</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-amber-600">
                    Expertise:
                  </span>
                  <p className="text-lg font-medium text-gray-800">
                    {teacher.subject}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    ID: {teacher.id}
                  </span>
                  <Link to={`/admin/teacherdata/${teacher.id}`}>
                    <button className="text-amber-600 hover:text-amber-800 font-medium transition-colors duration-200">
                      View Profile →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-medium text-amber-700 mb-2">
              No teachers found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or browse all teachers
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowData;
