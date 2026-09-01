import { createContext, useContext, useState } from "react";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEmployees = async () => {
    try {
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
        fetchEmployees,
        loading,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => useContext(EmployeeContext);