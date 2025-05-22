import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import colleges from "../../../data/colleges";
import teachers from "../../../data/teachers";
import { useNavigate } from "react-router-dom";

const AllColleges = () => {
    const [collegeSearch, setCollegeSearch] = useState("");
    const [allColleges, setAllCollege] = useState(colleges);
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setCollegeSearch(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();     
        const filterColleges = colleges.filter((college) =>
            college.name.toLowerCase().includes(collegeSearch.toLowerCase())
        );
        setAllCollege(filterColleges);
    };

    const handleCollegeRowOnClick = (college) => {
        navigate(`/admin/graduation/${college}`);
    };

    const resetSearch = () => {
        setCollegeSearch("");
        setAllCollege(colleges);
    };

    useEffect(() => {
        if (collegeSearch === "") {
            setAllCollege(colleges);
        }
    }, [collegeSearch]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Search Section */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h1 className="text-3xl font-bold text-orange-800 mb-6">Colleges Directory</h1>
                    <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-4">
                        <div className="flex-grow relative">
                            <input
                                type="text"
                                name="collegeSearch"
                                id="collegeSearch"
                                value={collegeSearch}
                                onChange={handleSearchChange}
                                placeholder="Search by college name..."
                                className="w-full py-3 px-4 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                            />
                            {collegeSearch && (
                                <button
                                    type="button"
                                    onClick={resetSearch}
                                    className="absolute right-3 top-3 text-orange-400 hover:text-orange-600"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                        <Button 
                            name={"Search"} 
                            className="px-6 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg transition-colors" 
                        />
                    </form>
                </div>

                {/* Colleges List */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {allColleges.map((college) => (
                        <div 
                            key={college.id}
                            onClick={() => handleCollegeRowOnClick(college.name)}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-orange-100 text-orange-800 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                                        {college.id}
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                                        {college.name}
                                    </h2>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{college.state}</span>
                                </div>
                            </div>
                            <div className="bg-orange-50 px-6 py-3 border-t border-orange-100 text-orange-600 font-medium group-hover:bg-orange-100 transition-colors">
                                View details →
                            </div>
                        </div>
                    ))}
                </div>

                {allColleges.length === 0 && (
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                        <h3 className="text-xl font-medium text-gray-600 mb-2">No colleges found</h3>
                        <p className="text-gray-500">Try a different search term or reset your search</p>
                        <button 
                            onClick={resetSearch}
                            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Reset Search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllColleges;