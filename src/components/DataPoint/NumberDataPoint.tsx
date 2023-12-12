import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postDataPointValue } from 'src/api/postDataPointValue';
import type { AnalogDataWidget } from './DataPoint.type';
import { debounce } from 'lodash';

interface NumberDataPointPropsType {
  data: AnalogDataWidget;
}

const NumberDataPoint = ({ data }: NumberDataPointPropsType) => {
  const { id, curVal } = data;
  const [inputValue, setInputValue] = useState<number>(0);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const editedValueRef = useRef(inputValue);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (data && !isEditing) {
      setInputValue(curVal);
      editedValueRef.current = curVal;
    }
  }, [curVal, data, isEditing]);

  const saveNewValue = useMutation({
    mutationFn: postDataPointValue,
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: ['datapoints'] })
        .finally(() => setIsEditing(false));
    }
  });

  const debouncedSave = debounce((value) => {
    if (curVal !== value) {
      saveNewValue.mutate({
        id,
        val: value
      });
    }
  }, 0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);

    if (newValue) {
      setInputValue(newValue);
      editedValueRef.current = newValue;

      if (!isEditing) {
        setIsEditing(true);
      }
    }
  };

  const handleFocus = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    debouncedSave(editedValueRef.current);
  };

  return (
    <div className="point-item__analog">
      <h4 className="point-item__title">{data.dis}</h4>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default NumberDataPoint;
