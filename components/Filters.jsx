import { MultiSelect, NumberInput, Select } from "@mantine/core";
import styled from "styled-components";
import PaddedTitle from "./PaddedTitle";
import moveTable from "data/move-table";
import abilityList from "data/ability-list";
import typeTable from "data/type-table";
import capitalizeFirstChar from "utils/capitalizeFirstChar";

/**
 * Multi-select Options
 */
const moveSelectOptions = Object.keys(moveTable).map((label) => ({
  label,
  value: label
}));

const abilitySelectOptions = abilityList.map((label) => ({
  label: label,
  value: label
}));

const typeSelectOptions = Object.keys(typeTable.attacking).map((value) => ({
  label: capitalizeFirstChar(value),
  value: capitalizeFirstChar(value)
}));

const operandOptions = [
  { label: "<", value: "lt" },
  { label: ">", value: "gt" },
  { label: "=", value: "eq" },
  { label: "<=", value: "lte" },
  { label: ">=", value: "gte" }
];

/**
 * Components
 */
const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const FilterContainer = styled.div`
  padding: 1rem 0;
`;

function handleMultiSelectChange(handleChange) {
  return (key) => (value) => handleChange({ key, value });
}

function handleInputChange(handleChange, query) {
  return (keys) => (value) => {
    // we're setting a value within a nested object/table
    // eg. {topKey: { subKey: value } }
    // so we're using a period delimiter to denote depth
    const [topKey, subKey] = keys.split(".");
    const currentValue = query[topKey];
    handleChange({ key: topKey, value: { ...currentValue, [subKey]: value } });
  };
}

/**
 * @typedef {Object} FiltersProps
 * @property {(data: { key: string; value: any }) => void} props.handleChange possible event handler
 * @property {import('hooks/usePokemonDataFilters')['initialQuery']} props.query query state
 * @param {FiltersProps} props { handleChange, query }
 */
export default function Filters(props) {
  const { handleChange, query } = props;
  const onMultiSelectChange = handleMultiSelectChange(handleChange);
  const onInputChange = handleInputChange(handleChange, query);

  return (
    <FilterContainer>
      <MultiSelect
        onChange={onMultiSelectChange("moves")}
        label="Learns the following moves:"
        data={moveSelectOptions}
        searchable
        placeholder="Select Moves"
      />
      <MultiSelect
        onChange={onMultiSelectChange("abilities")}
        label="Has the abilities:"
        data={abilitySelectOptions}
        searchable
        placeholder="Select Abilities"
      />
      <MultiSelect
        onChange={onMultiSelectChange("resistances")}
        label="Can resist the following types:"
        data={typeSelectOptions}
        searchable
        placeholder="Select Types"
      />
      <MultiSelect
        onChange={onMultiSelectChange("typeCoverage")}
        label="Has Type Coverage Against:"
        data={typeSelectOptions}
        searchable
        placeholder="Select Types"
      />
      <PaddedTitle order={2}>Base Stat Filters</PaddedTitle>
      <FlexContainer>
        <div>
          <InputContainer>
            <NumberInput
              defaultValue={0}
              label="HP Value"
              onChange={onInputChange("baseHp.value")}
            />
            <Select
              data={operandOptions}
              defaultValue={"gte"}
              label="Operand"
              onChange={onInputChange("baseHp.op")}
            />
          </InputContainer>
          <InputContainer>
            <NumberInput
              defaultValue={0}
              label="ATK Value"
              onChange={onInputChange("baseAtk.value")}
            />
            <Select
              label="Operand"
              data={operandOptions}
              defaultValue={"gte"}
              onChange={onInputChange("baseAtk.op")}
            />
          </InputContainer>
          <InputContainer>
            <NumberInput
              defaultValue={0}
              label="DEF Value"
              onChange={onInputChange("baseDef.value")}
            />
            <Select
              data={operandOptions}
              defaultValue={"gte"}
              label="Operand"
              onChange={onInputChange("baseDef.op")}
            />
          </InputContainer>
        </div>
        <div>
          <InputContainer>
            <NumberInput
              defaultValue={0}
              label="SPA Value"
              onChange={onInputChange("baseSpa.value")}
            />
            <Select
              label="Operand"
              data={operandOptions}
              defaultValue={"gte"}
              onChange={onInputChange("baseSpa.op")}
            />
          </InputContainer>
          <InputContainer>
            <NumberInput
              defaultValue={0}
              label="SPD Value"
              onChange={onInputChange("baseSpd.value")}
            />
            <Select
              label="Operand"
              data={operandOptions}
              defaultValue={"gte"}
              onChange={onInputChange("baseSpd.op")}
            />
          </InputContainer>
          <InputContainer>
            <NumberInput
              defaultValue={0}
              label="Speed"
              onChange={onInputChange("baseSpeed.value")}
            />
            <Select
              label="Operand"
              data={operandOptions}
              defaultValue={"gte"}
              onChange={onInputChange("baseSpeed.op")}
            />
          </InputContainer>
        </div>
      </FlexContainer>
    </FilterContainer>
  );
}
