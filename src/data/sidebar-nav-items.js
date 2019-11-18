export default function() {
  return [
    {
      title: "Trang Chủ",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Danh Sách Sản Phẩm",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Thêm Sản Phẩm",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Danh Sách Khách Hàng",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/tables",
    },
    {
      title: "Thông Tin Tài Khoản",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Lỗi & Sự Cố",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
