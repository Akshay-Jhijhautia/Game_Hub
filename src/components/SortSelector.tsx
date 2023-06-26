import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface Props {
  onSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          Order By: {currentSortOrder?.label || "Relevence"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((orders) => (
            <MenuItem
              onClick={() => onSortOrder(orders.value)}
              key={orders.value}
              value={orders.value}
            >
              {orders.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
