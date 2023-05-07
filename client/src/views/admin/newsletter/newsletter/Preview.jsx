import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Textarea,
} from "@material-tailwind/react";

import './preview.css'

export default function Preview(props) {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    return (
        <Fragment>

            <Dialog open={props.open} handler={props.handleOpen} size='xxl'>
                <table
                    className="nl-container"
                    width="100%"
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    role="presentation"
                    style={{
                        msoTableLspace: "0pt",
                        msoTableRspace: "0pt",
                        backgroundColor: "#f7f7f7",
                    }}
                >
                    <tbody>
                        <tr>
                            <td>
                                <table
                                    className="row row-1"
                                    align="center"
                                    width="100%"
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    role="presentation"
                                    style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table
                                                    className="row-content stack"
                                                    align="center"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    role="presentation"
                                                    style={{
                                                        msoTableLspace:
                                                            "0pt",
                                                        msoTableRspace:
                                                            "0pt",
                                                        borderRadius: 0,
                                                        color: "#000000",
                                                        width: 700,
                                                    }}
                                                    width={700}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                className="column column-1"
                                                                width="100%"
                                                                style={{
                                                                    msoTableLspace:
                                                                        "0pt",
                                                                    msoTableRspace:
                                                                        "0pt",
                                                                    fontWeight: 400,
                                                                    textAlign:
                                                                        "left",
                                                                    paddingBottom: 5,
                                                                    paddingTop: 5,
                                                                    verticalAlign:
                                                                        "top",
                                                                    borderTop: 0,
                                                                    borderRight: 0,
                                                                    borderBottom: 0,
                                                                    borderLeft: 0,
                                                                }}
                                                            >
                                                                <div
                                                                    className="spacer_block block-1"
                                                                    style={{
                                                                        height: 15,
                                                                        lineHeight: 15,
                                                                        fontSize: 1,
                                                                    }}
                                                                >

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table
                                    className="row row-2"
                                    align="center"
                                    width="100%"
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    role="presentation"
                                    style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table
                                                    className="row-content stack"
                                                    align="center"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    role="presentation"
                                                    style={{
                                                        msoTableLspace:
                                                            "0pt",
                                                        msoTableRspace:
                                                            "0pt",
                                                        backgroundColor:
                                                            "#9e4fba",
                                                        backgroundImage:
                                                            'url("https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7831/Header-bg.png")',
                                                        backgroundRepeat:
                                                            "no-repeat",
                                                        backgroundSize:
                                                            "cover",
                                                        borderRadius: 0,
                                                        color: "#000000",
                                                        width: 700,
                                                    }}
                                                    width={700}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                className="column column-1"
                                                                width="33.333333333333336%"
                                                                style={{
                                                                    msoTableLspace:
                                                                        "0pt",
                                                                    msoTableRspace:
                                                                        "0pt",
                                                                    fontWeight: 400,
                                                                    textAlign:
                                                                        "left",
                                                                    paddingBottom: 20,
                                                                    paddingLeft: 30,
                                                                    paddingRight: 10,
                                                                    paddingTop: 20,
                                                                    verticalAlign:
                                                                        "middle",
                                                                    borderTop: 0,
                                                                    borderRight: 0,
                                                                    borderBottom: 0,
                                                                    borderLeft: 0,
                                                                }}
                                                            >
                                                                <table
                                                                    className="image_block block-1"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className="pad"
                                                                                style={{
                                                                                    width: "100%",
                                                                                    paddingRight: 0,
                                                                                    paddingLeft: 0,
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    className="alignment"
                                                                                    align="center"
                                                                                    style={{
                                                                                        lineHeight: 10,
                                                                                    }}
                                                                                >
                                                                                    <a
                                                                                        href="https://www.example.com"
                                                                                        target="_blank"
                                                                                        style={{
                                                                                            outline: "none",
                                                                                        }}
                                                                                        tabIndex={
                                                                                            -1
                                                                                        }
                                                                                    >
                                                                                        <img
                                                                                            width={
                                                                                                193
                                                                                            }
                                                                                            src
                                                                                            alt="your-logo"
                                                                                            title="your-logo"
                                                                                        />
                                                                                    </a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td
                                                                className="column column-2"
                                                                width="66.66666666666667%"
                                                                style={{
                                                                    msoTableLspace:
                                                                        "0pt",
                                                                    msoTableRspace:
                                                                        "0pt",
                                                                    fontWeight: 400,
                                                                    textAlign:
                                                                        "left",
                                                                    paddingBottom: 5,
                                                                    paddingLeft: 25,
                                                                    paddingRight: 30,
                                                                    paddingTop: 5,
                                                                    verticalAlign:
                                                                        "middle",
                                                                    borderTop: 0,
                                                                    borderRight: 0,
                                                                    borderBottom: 0,
                                                                    borderLeft: 0,
                                                                }}
                                                            >
                                                                <table
                                                                    className="paragraph_block block-1"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                        wordBreak:
                                                                            "break-word",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="pad">
                                                                                <div
                                                                                    style={{
                                                                                        color: "#ffffff",
                                                                                        direction:
                                                                                            "ltr",
                                                                                        fontFamily:
                                                                                            "Inter, sans-serif",
                                                                                        fontSize: 16,
                                                                                        fontWeight: 400,
                                                                                        letterSpacing: 0,
                                                                                        lineHeight:
                                                                                            "120%",
                                                                                        textAlign:
                                                                                            "right",
                                                                                        msoLineHeightAlt:
                                                                                            "19.2px",
                                                                                    }}
                                                                                >
                                                                                    <p
                                                                                        style={{
                                                                                            margin: 0,
                                                                                        }}
                                                                                    >
                                                                                        Eddy
                                                                                        News
                                                                                        Letter
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table
                                    className="row row-3"
                                    align="center"
                                    width="100%"
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    role="presentation"
                                    style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table
                                                    className="row-content stack"
                                                    align="center"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    role="presentation"
                                                    style={{
                                                        msoTableLspace:
                                                            "0pt",
                                                        msoTableRspace:
                                                            "0pt",
                                                        borderRadius: 0,
                                                        color: "#000000",
                                                        width: 700,
                                                    }}
                                                    width={700}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                className="column column-1"
                                                                width="100%"
                                                                style={{
                                                                    msoTableLspace:
                                                                        "0pt",
                                                                    msoTableRspace:
                                                                        "0pt",
                                                                    fontWeight: 400,
                                                                    textAlign:
                                                                        "left",
                                                                    verticalAlign:
                                                                        "top",
                                                                    borderTop: 0,
                                                                    borderRight: 0,
                                                                    borderBottom: 0,
                                                                    borderLeft: 0,
                                                                }}
                                                            >
                                                                <table
                                                                    className="image_block block-1"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className="pad"
                                                                                style={{
                                                                                    width: "100%",
                                                                                    paddingRight: 0,
                                                                                    paddingLeft: 0,
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    className="alignment"
                                                                                    align="center"
                                                                                    style={{
                                                                                        lineHeight: 10,
                                                                                    }}
                                                                                >
                                                                                    <a
                                                                                        href="https://www.example.com"
                                                                                        target="_blank"
                                                                                        style={{
                                                                                            outline: "none",
                                                                                        }}
                                                                                        tabIndex={
                                                                                            -1
                                                                                        }
                                                                                    >
                                                                                        <img
                                                                                            className="big"
                                                                                            src="https://a7c89734c6.imgdist.com/public/users/Integrators/BeeProAgency/986841_971521/3.d2fb3dfb46169eddb84d.jpg"
                                                                                            style={{
                                                                                                display: "block",
                                                                                                height: "auto",
                                                                                                border: 0,
                                                                                                width: 700,
                                                                                                maxWidth: "100%",
                                                                                            }}
                                                                                            width={
                                                                                                700
                                                                                            }
                                                                                            alt="campus-guys"
                                                                                            title="campus-guys"
                                                                                        />
                                                                                    </a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table
                                    className="row row-4"
                                    align="center"
                                    width="100%"
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    role="presentation"
                                    style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table
                                                    className="row-content stack"
                                                    align="center"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    role="presentation"
                                                    style={{
                                                        msoTableLspace:
                                                            "0pt",
                                                        msoTableRspace:
                                                            "0pt",
                                                        backgroundColor:
                                                            "#efeef4",
                                                        borderBottom:
                                                            "0 solid #EFEEF4",
                                                        borderLeft:
                                                            "0 solid #EFEEF4",
                                                        borderRight:
                                                            "0px solid #EFEEF4",
                                                        borderTop:
                                                            "0 solid #EFEEF4",
                                                        color: "#000000",
                                                        width: 700,
                                                    }}
                                                    width={700}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                className="column column-1"
                                                                width="100%"
                                                                style={{
                                                                    msoTableLspace:
                                                                        "0pt",
                                                                    msoTableRspace:
                                                                        "0pt",
                                                                    fontWeight: 400,
                                                                    textAlign:
                                                                        "left",
                                                                    paddingBottom: 30,
                                                                    paddingLeft: 25,
                                                                    paddingRight: 25,
                                                                    paddingTop: 35,
                                                                    verticalAlign:
                                                                        "top",
                                                                    borderTop: 0,
                                                                    borderRight: 0,
                                                                    borderBottom: 0,
                                                                    borderLeft: 0,
                                                                }}
                                                            >
                                                                <table
                                                                    className="heading_block block-1"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className="pad"
                                                                                style={{
                                                                                    paddingBottom: 10,
                                                                                    paddingTop: 10,
                                                                                    textAlign:
                                                                                        "center",
                                                                                    width: "100%",
                                                                                }}
                                                                            >
                                                                                <h1
                                                                                    style={{
                                                                                        margin: 0,
                                                                                        color: "#4f5aba",
                                                                                        direction:
                                                                                            "ltr",
                                                                                        fontFamily:
                                                                                            '"Noto Serif", Georgia, serif',
                                                                                        fontSize: 34,
                                                                                        fontWeight: 700,
                                                                                        letterSpacing:
                                                                                            "normal",
                                                                                        lineHeight:
                                                                                            "120%",
                                                                                        textAlign:
                                                                                            "center",
                                                                                        marginTop: 0,
                                                                                        marginBottom: 0,
                                                                                    }}
                                                                                >
                                                                                    title
                                                                                </h1>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table
                                    className="row row-5"
                                    align="center"
                                    width="100%"
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    role="presentation"
                                    style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table
                                                    className="row-content stack"
                                                    align="center"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    role="presentation"
                                                    style={{
                                                        msoTableLspace:
                                                            "0pt",
                                                        msoTableRspace:
                                                            "0pt",
                                                        backgroundColor:
                                                            "#ffffff",
                                                        color: "#000000",
                                                        width: 700,
                                                    }}
                                                    width={700}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                className="column column-1"
                                                                width="50%"
                                                                style={{
                                                                    msoTableLspace:
                                                                        "0pt",
                                                                    msoTableRspace:
                                                                        "0pt",
                                                                    fontWeight: 400,
                                                                    textAlign:
                                                                        "left",
                                                                    paddingBottom: 30,
                                                                    paddingLeft: 30,
                                                                    paddingRight: 30,
                                                                    paddingTop: 40,
                                                                    verticalAlign:
                                                                        "middle",
                                                                    borderTop: 0,
                                                                    borderRight: 0,
                                                                    borderBottom: 0,
                                                                    borderLeft: 0,
                                                                }}
                                                            >
                                                                <table
                                                                    className="image_block block-1"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className="pad"
                                                                                style={{
                                                                                    width: "100%",
                                                                                    paddingRight: 0,
                                                                                    paddingLeft: 0,
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    className="alignment"
                                                                                    align="center"
                                                                                    style={{
                                                                                        lineHeight: 10,
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src
                                                                                        width={
                                                                                            290
                                                                                        }
                                                                                        alt="campus-session"
                                                                                        title="campus-session"
                                                                                    />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td
                                                                className="column column-2"
                                                                width="50%"
                                                                style={{
                                                                    msoTableLspace:
                                                                        "0pt",
                                                                    msoTableRspace:
                                                                        "0pt",
                                                                    fontWeight: 400,
                                                                    textAlign:
                                                                        "left",
                                                                    paddingBottom: 30,
                                                                    paddingLeft: 25,
                                                                    paddingRight: 25,
                                                                    paddingTop: 40,
                                                                    verticalAlign:
                                                                        "middle",
                                                                    borderTop: 0,
                                                                    borderRight: 0,
                                                                    borderBottom: 0,
                                                                    borderLeft: 0,
                                                                }}
                                                            >
                                                                <table
                                                                    className="heading_block block-1"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className="pad"
                                                                                style={{
                                                                                    paddingBottom: 20,
                                                                                    paddingTop: 5,
                                                                                    textAlign:
                                                                                        "center",
                                                                                    width: "100%",
                                                                                }}
                                                                            >
                                                                                <h1
                                                                                    style={{
                                                                                        margin: 0,
                                                                                        color: "#4f5aba",
                                                                                        direction:
                                                                                            "ltr",
                                                                                        fontFamily:
                                                                                            '"Noto Serif", Georgia, serif',
                                                                                        fontSize: 21,
                                                                                        fontWeight: 700,
                                                                                        letterSpacing:
                                                                                            "normal",
                                                                                        lineHeight:
                                                                                            "120%",
                                                                                        textAlign:
                                                                                            "left",
                                                                                        marginTop: 0,
                                                                                        marginBottom: 0,
                                                                                    }}
                                                                                ></h1>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table
                                                                    className="paragraph_block block-2"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                        wordBreak:
                                                                            "break-word",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className="pad"
                                                                                style={{
                                                                                    paddingBottom: 10,
                                                                                    paddingTop: 10,
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    style={{
                                                                                        color: "#515151",
                                                                                        direction:
                                                                                            "ltr",
                                                                                        fontFamily:
                                                                                            "Inter, sans-serif",
                                                                                        fontSize: 16,
                                                                                        fontWeight: 400,
                                                                                        letterSpacing: 0,
                                                                                        lineHeight:
                                                                                            "180%",
                                                                                        textAlign:
                                                                                            "left",
                                                                                        msoLineHeightAlt:
                                                                                            "28.8px",
                                                                                    }}
                                                                                ></div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table
                                                                    className="button_block block-3"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className="pad"
                                                                                style={{
                                                                                    paddingBottom: 15,
                                                                                    paddingTop: 15,
                                                                                    textAlign:
                                                                                        "left",
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    className="alignment"
                                                                                    align="left"
                                                                                >
                                                                                    <a
                                                                                        href
                                                                                        target="_blank"
                                                                                        style={{
                                                                                            textDecoration:
                                                                                                "none",
                                                                                            display: "inline-block",
                                                                                            color: "#201f42",
                                                                                            backgroundColor:
                                                                                                "#ffffff",
                                                                                            borderRadius: 0,
                                                                                            width: "auto",
                                                                                            borderTop:
                                                                                                "2px solid #201F42",
                                                                                            fontWeight: 400,
                                                                                            borderRight:
                                                                                                "2px solid #201F42",
                                                                                            borderBottom:
                                                                                                "2px solid #201F42",
                                                                                            borderLeft:
                                                                                                "2px solid #201F42",
                                                                                            paddingTop: 5,
                                                                                            paddingBottom: 5,
                                                                                            fontFamily:
                                                                                                '"Noto Serif", Georgia, serif',
                                                                                            fontSize: 16,
                                                                                            textAlign:
                                                                                                "center",
                                                                                            msoBorderAlt:
                                                                                                "none",
                                                                                            wordBreak:
                                                                                                "keep-all",
                                                                                        }}
                                                                                    >
                                                                                        <span
                                                                                            style={{
                                                                                                paddingLeft: 30,
                                                                                                paddingRight: 30,
                                                                                                fontSize: 16,
                                                                                                display: "inline-block",
                                                                                                letterSpacing:
                                                                                                    "normal",
                                                                                            }}
                                                                                        >
                                                                                            <span
                                                                                                dir="ltr"
                                                                                                style={{
                                                                                                    wordBreak:
                                                                                                        "break-word",
                                                                                                    lineHeight: 32,
                                                                                                }}
                                                                                            >
                                                                                                Read
                                                                                                More
                                                                                            </span>
                                                                                        </span>
                                                                                    </a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table
                                    className="row row-7"
                                    align="center"
                                    width="100%"
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    role="presentation"
                                    style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table
                                                    className="row-content stack"
                                                    align="center"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    role="presentation"
                                                    style={{
                                                        msoTableLspace:
                                                            "0pt",
                                                        msoTableRspace:
                                                            "0pt",
                                                        backgroundColor:
                                                            "#9e4fba",
                                                        backgroundImage:
                                                            'url("https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7831/Header-bg.png")',
                                                        backgroundRepeat:
                                                            "no-repeat",
                                                        backgroundSize:
                                                            "cover",
                                                        borderRadius: 0,
                                                        color: "#000000",
                                                        width: 700,
                                                    }}
                                                    width={700}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                className="column column-1"
                                                                width="50%"
                                                                style={{
                                                                    msoTableLspace:
                                                                        "0pt",
                                                                    msoTableRspace:
                                                                        "0pt",
                                                                    fontWeight: 400,
                                                                    textAlign:
                                                                        "left",
                                                                    paddingBottom: 40,
                                                                    paddingLeft: 25,
                                                                    paddingRight: 25,
                                                                    paddingTop: 40,
                                                                    verticalAlign:
                                                                        "middle",
                                                                    borderTop: 0,
                                                                    borderRight: 0,
                                                                    borderBottom: 0,
                                                                    borderLeft: 0,
                                                                }}
                                                            >
                                                                <table
                                                                    className="heading_block block-1"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className="pad"
                                                                                style={{
                                                                                    paddingBottom: 5,
                                                                                    paddingLeft: 10,
                                                                                    paddingTop: 5,
                                                                                    textAlign:
                                                                                        "center",
                                                                                    width: "100%",
                                                                                }}
                                                                            >
                                                                                <h1
                                                                                    style={{
                                                                                        margin: 0,
                                                                                        color: "#ffffff",
                                                                                        direction:
                                                                                            "ltr",
                                                                                        fontFamily:
                                                                                            '"Noto Serif", Georgia, serif',
                                                                                        fontSize: 40,
                                                                                        fontWeight: 700,
                                                                                        letterSpacing:
                                                                                            "normal",
                                                                                        lineHeight:
                                                                                            "120%",
                                                                                        textAlign:
                                                                                            "left",
                                                                                        marginTop: 0,
                                                                                        marginBottom: 0,
                                                                                    }}
                                                                                >
                                                                                    <span className="tinyMce-placeholder">
                                                                                        Need
                                                                                        help?
                                                                                        <br />
                                                                                        <br />
                                                                                    </span>
                                                                                </h1>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td
                                                                className="column column-2"
                                                                width="50%"
                                                                style={{
                                                                    msoTableLspace:
                                                                        "0pt",
                                                                    msoTableRspace:
                                                                        "0pt",
                                                                    fontWeight: 400,
                                                                    textAlign:
                                                                        "left",
                                                                    paddingBottom: 40,
                                                                    paddingLeft: 25,
                                                                    paddingRight: 25,
                                                                    paddingTop: 40,
                                                                    verticalAlign:
                                                                        "middle",
                                                                    borderTop: 0,
                                                                    borderRight: 0,
                                                                    borderBottom: 0,
                                                                    borderLeft: 0,
                                                                }}
                                                            >
                                                                <table
                                                                    className="paragraph_block block-1"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                        wordBreak:
                                                                            "break-word",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className="pad"
                                                                                style={{
                                                                                    paddingRight: 10,
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    style={{
                                                                                        color: "#ffffff",
                                                                                        direction:
                                                                                            "ltr",
                                                                                        fontFamily:
                                                                                            "Inter, sans-serif",
                                                                                        fontSize: 16,
                                                                                        fontWeight: 400,
                                                                                        letterSpacing: 0,
                                                                                        lineHeight:
                                                                                            "120%",
                                                                                        textAlign:
                                                                                            "right",
                                                                                        msoLineHeightAlt:
                                                                                            "19.2px",
                                                                                    }}
                                                                                >
                                                                                    <p
                                                                                        style={{
                                                                                            margin: 0,
                                                                                        }}
                                                                                    >
                                                                                        <a
                                                                                            href="https://www.example.com"
                                                                                            target="_blank"
                                                                                            style={{
                                                                                                textDecoration:
                                                                                                    "underline",
                                                                                                color: "#ffffff",
                                                                                            }}
                                                                                            rel="noopener"
                                                                                        >
                                                                                            <u>
                                                                                                CONTACT
                                                                                                US
                                                                                            </u>{" "}
                                                                                            -&gt;
                                                                                        </a>
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table
                                    className="row row-8"
                                    align="center"
                                    width="100%"
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    role="presentation"
                                    style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                        backgroundSize: "auto",
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table
                                                    className="row-content stack"
                                                    align="center"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    role="presentation"
                                                    style={{
                                                        msoTableLspace:
                                                            "0pt",
                                                        msoTableRspace:
                                                            "0pt",
                                                        borderRadius: 0,
                                                        color: "#000000",
                                                        backgroundSize:
                                                            "auto",
                                                        backgroundColor:
                                                            "#201f42",
                                                        width: 700,
                                                    }}
                                                    width={700}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                className="column column-1"
                                                                width="33.333333333333336%"
                                                                style={{
                                                                    msoTableLspace:
                                                                        "0pt",
                                                                    msoTableRspace:
                                                                        "0pt",
                                                                    fontWeight: 400,
                                                                    textAlign:
                                                                        "left",
                                                                    paddingBottom: 20,
                                                                    paddingLeft: 30,
                                                                    paddingRight: 10,
                                                                    paddingTop: 20,
                                                                    verticalAlign:
                                                                        "middle",
                                                                    borderTop: 0,
                                                                    borderRight: 0,
                                                                    borderBottom: 0,
                                                                    borderLeft: 0,
                                                                }}
                                                            >
                                                                <table
                                                                    className="image_block block-1"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className="pad"
                                                                                style={{
                                                                                    width: "100%",
                                                                                    paddingRight: 0,
                                                                                    paddingLeft: 0,
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    className="alignment"
                                                                                    align="center"
                                                                                    style={{
                                                                                        lineHeight: 10,
                                                                                    }}
                                                                                >
                                                                                    <a
                                                                                        href="https://www.example.com"
                                                                                        target="_blank"
                                                                                        style={{
                                                                                            outline: "none",
                                                                                        }}
                                                                                        tabIndex={
                                                                                            -1
                                                                                        }
                                                                                    >
                                                                                        <img
                                                                                            src="https://a7c89734c6.imgdist.com/public/users/Integrators/BeeProAgency/986841_971521/signature-white.ea3d21c106679b258d95423230928bb1.svg"
                                                                                            style={{
                                                                                                display: "block",
                                                                                                height: "auto",
                                                                                                border: 0,
                                                                                                width: 155,
                                                                                                maxWidth: "100%",
                                                                                            }}
                                                                                            width={
                                                                                                155
                                                                                            }
                                                                                            alt="your-logo"
                                                                                            title="your-logo"
                                                                                        />
                                                                                    </a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td
                                                                className="column column-2"
                                                                width="66.66666666666667%"
                                                                style={{
                                                                    msoTableLspace:
                                                                        "0pt",
                                                                    msoTableRspace:
                                                                        "0pt",
                                                                    fontWeight: 400,
                                                                    textAlign:
                                                                        "left",
                                                                    paddingBottom: 5,
                                                                    paddingLeft: 25,
                                                                    paddingRight: 30,
                                                                    paddingTop: 5,
                                                                    verticalAlign:
                                                                        "middle",
                                                                    borderTop: 0,
                                                                    borderRight: 0,
                                                                    borderBottom: 0,
                                                                    borderLeft: 0,
                                                                }}
                                                            >
                                                                <table
                                                                    className="paragraph_block block-1"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                        wordBreak:
                                                                            "break-word",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="pad">
                                                                                <div
                                                                                    style={{
                                                                                        color: "#ffffff",
                                                                                        direction:
                                                                                            "ltr",
                                                                                        fontFamily:
                                                                                            "Inter, sans-serif",
                                                                                        fontSize: 14,
                                                                                        fontWeight: 400,
                                                                                        letterSpacing: 0,
                                                                                        lineHeight:
                                                                                            "120%",
                                                                                        textAlign:
                                                                                            "right",
                                                                                        msoLineHeightAlt:
                                                                                            "16.8px",
                                                                                    }}
                                                                                >
                                                                                    <p
                                                                                        style={{
                                                                                            margin: 0,
                                                                                        }}
                                                                                    >
                                                                                        Copyright
                                                                                        ©
                                                                                        2023
                                                                                        Eddy
                                                                                        Abouns,
                                                                                        All
                                                                                        rights
                                                                                        reserved.
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table
                                    className="row row-9"
                                    align="center"
                                    width="100%"
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    role="presentation"
                                    style={{
                                        msoTableLspace: "0pt",
                                        msoTableRspace: "0pt",
                                    }}
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                <table
                                                    className="row-content stack"
                                                    align="center"
                                                    border={0}
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    role="presentation"
                                                    style={{
                                                        msoTableLspace:
                                                            "0pt",
                                                        msoTableRspace:
                                                            "0pt",
                                                        color: "#000000",
                                                        width: 700,
                                                    }}
                                                    width={700}
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                className="column column-1"
                                                                width="100%"
                                                                style={{
                                                                    msoTableLspace:
                                                                        "0pt",
                                                                    msoTableRspace:
                                                                        "0pt",
                                                                    fontWeight: 400,
                                                                    textAlign:
                                                                        "left",
                                                                    paddingBottom: 5,
                                                                    paddingTop: 5,
                                                                    verticalAlign:
                                                                        "top",
                                                                    borderTop: 0,
                                                                    borderRight: 0,
                                                                    borderBottom: 0,
                                                                    borderLeft: 0,
                                                                }}
                                                            >
                                                                <table
                                                                    className="icons_block block-1"
                                                                    width="100%"
                                                                    border={
                                                                        0
                                                                    }
                                                                    cellPadding={
                                                                        0
                                                                    }
                                                                    cellSpacing={
                                                                        0
                                                                    }
                                                                    role="presentation"
                                                                    style={{
                                                                        msoTableLspace:
                                                                            "0pt",
                                                                        msoTableRspace:
                                                                            "0pt",
                                                                    }}
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                className="pad"
                                                                                style={{
                                                                                    verticalAlign:
                                                                                        "middle",
                                                                                    color: "#9d9d9d",
                                                                                    fontFamily:
                                                                                        "inherit",
                                                                                    fontSize: 15,
                                                                                    paddingBottom: 5,
                                                                                    paddingTop: 5,
                                                                                    textAlign:
                                                                                        "center",
                                                                                }}
                                                                            >
                                                                                <table
                                                                                    width="100%"
                                                                                    cellPadding={
                                                                                        0
                                                                                    }
                                                                                    cellSpacing={
                                                                                        0
                                                                                    }
                                                                                    role="presentation"
                                                                                    style={{
                                                                                        msoTableLspace:
                                                                                            "0pt",
                                                                                        msoTableRspace:
                                                                                            "0pt",
                                                                                    }}
                                                                                >
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td
                                                                                                className="alignment"
                                                                                                style={{
                                                                                                    verticalAlign:
                                                                                                        "middle",
                                                                                                    textAlign:
                                                                                                        "center",
                                                                                                }}
                                                                                            >
                                                                                                <table
                                                                                                    className="icons-inner"
                                                                                                    style={{
                                                                                                        msoTableLspace:
                                                                                                            "0pt",
                                                                                                        msoTableRspace:
                                                                                                            "0pt",
                                                                                                        display: "inline-block",
                                                                                                        marginRight:
                                                                                                            "-4px",
                                                                                                        paddingLeft: 0,
                                                                                                        paddingRight: 0,
                                                                                                    }}
                                                                                                    cellPadding={
                                                                                                        0
                                                                                                    }
                                                                                                    cellSpacing={
                                                                                                        0
                                                                                                    }
                                                                                                    role="presentation"
                                                                                                >
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td
                                                                                                                style={{
                                                                                                                    verticalAlign:
                                                                                                                        "middle",
                                                                                                                    textAlign:
                                                                                                                        "center",
                                                                                                                    paddingTop: 5,
                                                                                                                    paddingBottom: 5,
                                                                                                                    paddingLeft: 5,
                                                                                                                    paddingRight: 6,
                                                                                                                }}
                                                                                                            >
                                                                                                                <a
                                                                                                                    href="https://www.designedwithbee.com/?utm_source=editor&utm_medium=bee_pro&utm_campaign=free_footer_link"
                                                                                                                    target="_blank"
                                                                                                                    style={{
                                                                                                                        textDecoration:
                                                                                                                            "none",
                                                                                                                    }}
                                                                                                                >
                                                                                                                    <img
                                                                                                                        className="icon"
                                                                                                                        alt="Designed with BEE"
                                                                                                                        src="https://d1oco4z2z1fhwp.cloudfront.net/assets/bee.png"
                                                                                                                        height={
                                                                                                                            32
                                                                                                                        }
                                                                                                                        width={
                                                                                                                            34
                                                                                                                        }
                                                                                                                        align="center"
                                                                                                                        style={{
                                                                                                                            display: "block",
                                                                                                                            height: "auto",
                                                                                                                            margin: "0 auto",
                                                                                                                            border: 0,
                                                                                                                        }}
                                                                                                                    />
                                                                                                                </a>
                                                                                                            </td>
                                                                                                            <td
                                                                                                                style={{
                                                                                                                    fontFamily:
                                                                                                                        "Inter, sans-serif",
                                                                                                                    fontSize: 15,
                                                                                                                    color: "#9d9d9d",
                                                                                                                    verticalAlign:
                                                                                                                        "middle",
                                                                                                                    letterSpacing:
                                                                                                                        "undefined",
                                                                                                                    textAlign:
                                                                                                                        "center",
                                                                                                                }}
                                                                                                            >
                                                                                                                <a
                                                                                                                    href="https://www.designedwithbee.com/?utm_source=editor&utm_medium=bee_pro&utm_campaign=free_footer_link"
                                                                                                                    target="_blank"
                                                                                                                    style={{
                                                                                                                        color: "#9d9d9d",
                                                                                                                        textDecoration:
                                                                                                                            "none",
                                                                                                                    }}
                                                                                                                >
                                                                                                                    Designed
                                                                                                                    with
                                                                                                                    BEE
                                                                                                                </a>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>;


                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={props.handleOpen}
                        class="mr-1"
                    >
                        <span>Close</span>
                    </Button>
                </DialogFooter>
            </Dialog>

        </Fragment >
    );
}
