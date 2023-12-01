import { useQuery } from 'react-query';
import { getEquipments } from '../../api/getEquipments';
import { parseToArray } from '../../api/parser';
import type { EquipmentType } from '../../api/getEquipments.type';
import type { MouseEvent } from 'react';
import './EquipmentList.style.scss';

type EquipmentListPropsType = {
  isSearchMode: boolean;
};

const EquipmentList = ({ isSearchMode }: EquipmentListPropsType) => {
  const { data, isError, error } = useQuery('equipments', getEquipments, {
    select: parseToArray,
    refetchInterval: 1000
  });

  if (isError) {
    return <p>Error: {error as string}</p>;
  }

  const buildList = (id: string, equipments: EquipmentType[], depth: number = 1) => {
    const children = equipments.filter((equipment: EquipmentType) => equipment.equipRef === id);

    if (children.length === 0) {
      return null;
    }

    return (
      <ul className={`nav-list__sub ${depth > 1 ? 'nav-list__sub--small' : null}`}>
        {children.map((nestedEquipment) => (
          <li
            key={nestedEquipment.id}
            data-equipment={nestedEquipment.id}
            className="nav-list__sub-li"
          >
            <span className="point-name" onClick={selectEquipmentHandler}>
              {nestedEquipment.dis}
            </span>
            {buildList(nestedEquipment.id, equipments, ++depth)}
          </li>
        ))}
      </ul>
    );
  };

  const selectEquipmentHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const currentItem = e.currentTarget;
    const generalList = currentItem.closest('ul');

    if (generalList) {
      const openedItems = generalList.querySelectorAll('.nav-list__li, .nav-list__sub-li');
      const selectedPoint = generalList.querySelectorAll('.point-name--select');

      openedItems.forEach((el) => (el !== currentItem ? el.classList.remove('open') : ''));
      selectedPoint.forEach((el) => el.classList.remove('point-name--select'));

      !currentItem.parentElement?.classList.contains('nav-list__li') &&
        currentItem.classList.add('point-name--select');

      currentItem.parentElement?.classList.add('open');
    }
  };

  return (
    <div className="-mr-5 pr-5 h-[calc(100dvh-12rem-54px)] lg:-mr-10 lg:pr-10 lg:overflow-y-auto">
      {isSearchMode ? (
        <p className="text-lg">Number of matches found: x</p>
      ) : (
        <ul className="nav-list">
          {(data as EquipmentType[])
            ?.filter((item) => !item.equipRef)
            .map((item) => (
              <li key={item.id} className="nav-list__li" data-equipment={item.id}>
                <span className="point-name" onClick={selectEquipmentHandler}>
                  {item.dis}
                </span>
                {buildList(item.id, data as EquipmentType[])}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default EquipmentList;
