"use client";
import style from "./Medical occasions.module.css";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function MedicalOccasions() {
  const table = [
    {
      day: "روز چهانی سل",
      date: "18 فروردین",
    },
    {
      day: "روز جهانی بهداشت",
      date: "25 فروردین",
    },
    {
      day: "روز چهانی سل",
      date: "25 فروردین",
    },
    {
      day: "روز چهانی سل",
      date: "25 فروردین",
    },
    {
      day: "روز جهانی بهداشت",
      date: "25 فروردین",
    },
    {
      day: "روز جهانی بهداشت",
      date: "25 فروردین",
    },
    {
      day: "روز چهانی سل",
      date: "25 فروردین ",
    },
    {
      day: "روز چهانی سل",
      date: "18 فروردین",
    },
    {
      day: "روز جهانی بهداشت",
      date: "25 فروردین",
    },
    {
      day: "روز چهانی سل",
      date: "25 فروردین",
    },
    {
      day: "روز چهانی سل",
      date: "25 فروردین",
    },
    {
      day: "روز جهانی بهداشت",
      date: "25 فروردین",
    },
    {
      day: "روز جهانی بهداشت",
      date: "25 فروردین",
    },
    {
      day: "روز چهانی سل",
      date: "25 فروردین ",
    },
    {
      day: "روز چهانی سل",
      date: "18 فروردین",
    },
    {
      day: "روز جهانی بهداشت",
      date: "25 فروردین",
    },
    {
      day: "روز چهانی سل",
      date: "25 فروردین",
    },
    {
      day: "روز چهانی سل",
      date: "25 فروردین",
    },
    {
      day: "روز جهانی بهداشت",
      date: "25 فروردین",
    },
    {
      day: "روز جهانی بهداشت",
      date: "25 فروردین",
    },
    {
      day: "روز چهانی سل",
      date: "25 فروردین ",
    },
  ];
  const [currentItems, setcurrentItems] = useState<any>();
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setpageCount] = useState(0);
  const itemsPerPage = 7;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setcurrentItems(table.slice(itemOffset, endOffset));
    setpageCount(Math.ceil(table.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % table.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={style.productlist_all}>
      <div className={style.productlist_box_filter}>
        <div className={style.productlist_header_div}>
          <p className={style.productlist_header_p}>
            لطفا کاربری دستگاه خود را در گروه های زیر انتخاب کنید.
          </p>
          <p className={style.productlist_header_p}>
            لطفا برای جستجوی بهتر باکس های زیر را پر کنید.
          </p>
        </div>
        <div className={style.productlist_dropdown}>
          <div className={style.productlist_custom_select}>
            <select className={style.productlist_box_select2}>
              <option value="0">نام دستگاه</option>
              <option value="1">مارک دستگاه</option>
              <option value="2">کشور سازنده</option>
              <option value="3">شرکت نمایندگی</option>
              <option value="4">شماره تماس</option>
              <option value="5">لینک سایت</option>
            </select>
          </div>
          <div className={style.productlist_custom_select}>
            <select className={style.productlist_box_select2}>
              <option value="0">ردیف</option>
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
              <option value="5"></option>
            </select>
          </div>
          <div className={style.productlist_input_div}>
            <input
              type="text"
              className={style.productlist_input}
              placeholder="کلمه مورد نظر خود را تایپ کنید."
            />
            <Image
              alt=""
              src="/search_normal_li.svg"
              width={18}
              height={18}
              className={style.productlist_search_pic}
            />
          </div>
        </div>
        <div className={style.productlist_btn_div}>
          <button className={style.productlist_btn_1}>
            نمایش کل لیست جاری
            <Image alt="" src="/tik.svg" width={18} height={18} />
          </button>
          <button
            className={style.productlist_btn_2}
            
          >
            جست جو
            <Image alt="" src="/search_blue.svg" width={18} height={18} />
          </button>
        </div>
      </div>
      <div className={style.productlist_table_div}>
        <table>
          <tr className={style.productlist_header_tr}>
            <th className={style.productlist_th1}>ردیف</th>
            <th className={style.productlist_th2}>نام روز </th>
            <th className={style.productlist_th3}>تاریخ </th>
          </tr>
          {table &&
            table &&
            currentItems &&
            currentItems.map((item: any, index: any) => {
              let color;
              if (index == 1) {
                color = "#FCFCFC";
              } else {
                if (index == 3) {
                  color = "#FCFCFC";
                } else {
                  if (index == 5) {
                    color = "#FCFCFC";
                  }
                }
              }
              return (
              
                  <tr key={index} style={{ background: color }}>
                    <td className={style.productlist_td1}>{index + 1}</td>
                    <td className={style.productlist_td2}>{item.day}</td>
                    <td className={style.productlist_td5}>
                      <div className={style.productlist_td_div2}>
                        {item.date}
                      </div>
                    </td>
                  </tr>
                ) 
            })}{" "}
        </table>
      </div>
      <div
        className={style.productlist_pagination}
      >
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <img src="/right.svg" className={style.productlist_image}></img>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel={
            <img src="/left.svg" className={style.productlist_image}></img>
          }
          renderOnZeroPageCount={null}
          containerClassName={style.productlist_pagination_container}
          pageLinkClassName={style.productlist_page_num}
          previousLinkClassName={style.productlist_page_previous}
          nextLinkClassName={style.productlist_page_next}
          activeLinkClassName={style.productlist_active}
        />
      </div>
    </div>
  );
}
