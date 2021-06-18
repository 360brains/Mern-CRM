import React, { useEffect } from "react";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Breadcrumb,
} from "reactstrap";

import { Colxx } from "../SepratorStyle/CustomStrap";
import Table from "./Tables";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from '../../redux/action';



const OrdersList = () => {

  const dispatch = useDispatch()

  const getProducts = useSelector((state) => state.getProductsReducer);
  const { Users } = getProducts

  useEffect(() => {
    getDispatchData()
  }, [])
  const getDispatchData = async () => {
    await dispatch(getUser())

  }

  const ordersData = [
    {
      id: 1,
      title: 'Marble Cake',
      img: '/assets/img/products/marble-cake-thumb.jpg',
      category: 'Cakes',
      createDate: '02.04.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'Wedding cake with flowers Macarons and blueberries',
      sales: 1647,
      stock: 62,
    },
    {
      id: 2,
      title: 'Fat Rascal',
      category: 'Cupcakes',
      img: '/assets/img/products/fat-rascal-thumb.jpg',
      createDate: '01.04.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'Cheesecake with chocolate cookies and Cream biscuits',
      sales: 1240,
      stock: 48,
    },
    {
      id: 3,
      title: 'Chocolate Cake',
      img: '/assets/img/products/chocolate-cake-thumb.jpg',
      category: 'Cakes',
      createDate: '25.03.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'Homemade cheesecake with fresh berries and mint',
      sales: 1080,
      stock: 57,
    },
    {
      id: 4,
      title: 'Goose Breast',
      img: '/assets/img/products/goose-breast-thumb.jpg',
      category: 'Cakes',
      createDate: '21.03.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'Chocolate cake with berries',
      sales: 1014,
      stock: 41,
    },
    {
      id: 5,
      title: 'Petit Gâteau',
      category: 'Cupcakes',
      img: '/assets/img/products/petit-gateau-thumb.jpg',
      createDate: '02.06.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'Chocolate cake with mascarpone',
      sales: 985,
      stock: 23,
    },
    {
      id: 6,
      title: 'Salzburger Nockerl',
      img: '/assets/img/products/salzburger-nockerl-thumb.jpg',
      category: 'Desserts',
      createDate: '14.07.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'Wedding cake decorated with donuts and wild berries',
      sales: 962,
      stock: 34,
    },
    {
      id: 7,
      title: 'Napoleonshat',
      img: '/assets/img/products/napoleonshat-thumb.jpg',
      category: 'Desserts',
      createDate: '05.02.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'Cheesecake with fresh berries and mint for dessert',
      sales: 921,
      stock: 31,
    },
    {
      id: 8,
      title: 'Cheesecake',
      img: '/assets/img/products/cheesecake-thumb.jpg',
      category: 'Cakes',
      createDate: '18.08.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'Delicious vegan chocolate cake',
      sales: 887,
      stock: 21,
    },
    {
      id: 9,
      title: 'Financier',
      img: '/assets/img/products/financier-thumb.jpg',
      category: 'Cakes',
      createDate: '15.03.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description:
        'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
      sales: 865,
      stock: 53,
    },
    {
      id: 10,
      title: 'Genoise',
      img: '/assets/img/products/genoise-thumb.jpg',
      category: 'Cupcakes',
      createDate: '11.06.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'Christmas fruit cake, pudding on top',
      sales: 824,
      stock: 55,
    },
    {
      id: 11,
      title: 'Gingerbread',
      img: '/assets/img/products/gingerbread-thumb.jpg',
      category: 'Cakes',
      createDate: '10.04.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'Wedding cake decorated with donuts and wild berries',
      sales: 714,
      stock: 12,
    },
    {
      id: 12,
      title: 'Magdalena',
      img: '/assets/img/products/magdalena-thumb.jpg',
      category: 'Cakes',
      createDate: '22.07.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'Christmas fruit cake, pudding on top',
      sales: 702,
      stock: 14,
    },
    {
      id: 13,
      title: 'Parkin',
      img: '/assets/img/products/parkin-thumb.jpg',
      category: 'Cakes',
      createDate: '22.08.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description:
        'White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate',
      sales: 689,
      stock: 78,
    },
    {
      id: 14,
      title: 'Streuselkuchen',
      img: '/assets/img/products/streuselkuchen-thumb.jpg',
      category: 'Cakes',
      createDate: '22.07.2018',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'Delicious vegan chocolate cake',
      sales: 645,
      stock: 55,
    },
    {
      id: 15,
      title: 'Tea loaf',
      img: '/assets/img/products/tea-loaf-thumb.jpg',
      category: 'Cakes',
      createDate: '10.09.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'Cheesecake with fresh berries and mint for dessert',
      sales: 632,
      stock: 20,
    },
    {
      id: 16,
      title: 'Merveilleux',
      img: '/assets/img/products/merveilleux-thumb.jpg',
      category: 'Cakes',
      createDate: '18.02.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'Chocolate cake with mascarpone',
      sales: 621,
      stock: 6,
    },
    {
      id: 17,
      title: 'Fruitcake',
      img: '/assets/img/products/fruitcake-thumb.jpg',
      category: 'Cakes',
      createDate: '12.01.2019',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'Chocolate cake with berries',
      sales: 595,
      stock: 17,
    },
    {
      id: 18,
      title: 'Bebinca',
      img: '/assets/img/products/bebinca-thumb.jpg',
      category: 'Cakes',
      createDate: '04.02.2019',
      status: 'PROCESSED',
      statusColor: 'secondary',
      description: 'Homemade cheesecake with fresh berries and mint',
      sales: 574,
      stock: 16,
    },
    {
      id: 19,
      title: 'Cremeschnitte',
      img: '/assets/img/products/cremeschnitte-thumb.jpg',
      category: 'Desserts',
      createDate: '04.03.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'Cheesecake with chocolate cookies and Cream biscuits',
      sales: 562,
      stock: 9,
    },
    {
      id: 20,
      title: 'Soufflé',
      img: '/assets/img/products/souffle-thumb.jpg',
      category: 'Cupcakes',
      createDate: '16.01.2018',
      status: 'ON HOLD',
      statusColor: 'primary',
      description: 'Wedding cake with flowers Macarons and blueberries',
      sales: 524,
      stock: 14,
    },
  ];

  const UsersData = Users && Users.respones

  const cols = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: '_id',
        cellClass: 'list-item-heading w-40',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Name',
        accessor: 'username',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'Email',
        accessor: 'email',
        cellClass: 'text-muted w-10',
        Cell: (props) => <>{props.value}</>,
      },
      {
        Header: 'UpdatedAt',
        accessor: 'updatedAt',
        cellClass: 'text-muted w-40',
        Cell: (props) => <>{props.value}</>,
      },
    ],
    []
  );

  return (
    <>
      <main>
        <Row>
          <Colxx xxs="12">
            <h1>Orders</h1>
            <Breadcrumb className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
              <ol className="breadcrumb pt-0">
                <li className="breadcrumb-item">
                  <Link to="/admin/dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  all orders
                </li>
              </ol>
            </Breadcrumb>
          </Colxx>
        </Row>
        {UsersData && UsersData ?

          <Row>
            <Colxx xxs="12">
              <Card className="mb-4">
                <CardBody>
                  <CardTitle>

                  </CardTitle>
                  <Table columns={cols} data={UsersData} />
                </CardBody>
              </Card>
            </Colxx>
          </Row>

          :
          <div className="loading"></div>
        }

      </main>

    </>
  );
};

export default OrdersList;
