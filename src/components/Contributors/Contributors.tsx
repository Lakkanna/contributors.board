import * as React from "react";

interface IContributor {
  firstName: string;
  lastName: string;
}
const contributors: IContributor[] = [
  {firstName: "Lakkanna", lastName: "Walikar"},
  {firstName: "Karthik", lastName: "HR"},
  {firstName: "Purushottam", lastName: "Gour"},
  {firstName: "Suman", lastName: "KN"}
];

const Contributors: React.FC = () => {
    return (
      <ul>
        {
          contributors.map(contributor => <li> {`${contributor.firstName} ${contributor.lastName}`} </li>)
        }
      </ul>
    );
};

export default Contributors;
