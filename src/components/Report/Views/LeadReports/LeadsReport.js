// import React, { Component } from "react";
// import { connect } from "react-redux";
// import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
// import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

// import ReportDateRangePicker from "../ReportDateRangePicker";

// // Charts
// import BarChart from "Components/Charts/BarChart";
// import PieChart from "Components/Charts/PieChart";

// // Actions
// import {
//   reportOnChangeDate,
//   reportOnFocusChange,
//   reportResetDate,
//   getLeadReport
// } from "Actions";

// import {
//   leadSourceCreated,
//   LeadStatus,
//   leadCreatedBy
// } from "Components/ReportDummy";

// class LeadsReport extends Component {
//   render() {
//     const { startDate, endDate, focusedInput } = this.props.dateRange;
//     const { loading } = this.props.leadReportData;
//     return (
//       <React.Fragment>
//         {loading && <RctSectionLoader />}
//         <div className="row">
//           <div className="col-md-6">
//             <RctCollapsibleCard heading="Set Date Range" fullBlock>
//               <ReportDateRangePicker
//                 startDate={startDate}
//                 endDate={endDate}
//                 onDatesChange={this.props.reportOnChangeDate}
//                 focusedInput={focusedInput}
//                 onFocusChange={this.props.reportOnFocusChange}
//                 handleSubmit={this.props.getLeadReport}
//                 reset={this.props.reportResetDate}
//               />
//             </RctCollapsibleCard>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <RctCollapsibleCard heading={"Leads Created by Source"}>
//               <BarChart data={leadSourceCreated} />
//             </RctCollapsibleCard>
//           </div>
//           <div className="col-md-6">
//             <RctCollapsibleCard heading={"Overall Leads Status"}>
//               <PieChart data={LeadStatus} />
//             </RctCollapsibleCard>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-10">
//             <RctCollapsibleCard heading={"Leads Created By Staff"}>
//               <BarChart data={leadCreatedBy} />
//             </RctCollapsibleCard>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
// const mapStateToProps = ({ reportState }) => {
//   const { dateRange, leadReportData } = reportState;
//   return { dateRange, leadReportData };
// };

// export default connect(
//   mapStateToProps,
//   {
//     reportOnChangeDate,
//     reportOnFocusChange,
//     reportResetDate,
//     getLeadReport
//   }
// )(LeadsReport);
