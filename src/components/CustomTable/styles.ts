import styled from "styled-components";
import Colors from "../../theme/theme.colors";


export const TableCustom = styled.table`
    overflow: auto;
    width: 100%;
    text-align:start;
    border-collapse: separate;
    border-spacing: 0 15px;
`;

export const DivWrapper = styled.div`
    overflow-y: auto;
    max-height: 15rem;
    width: 100%;
    -layout: fixed;
    border-radius: 8px;

		/* @media screen and (max-width: 600px) {
			width: 100%;
		}

		@media only screen and (min-width: 768px){
			width: 100%;
			padding-right:2rem;
		}

		@media only screen and (min-width: 992px){
			width: 100%;
			padding-right:2rem;
		} */



    th {
        text-align: left;
        top: 0;
        position: sticky;
        background:#F8F8F8
    }

		&::-webkit-scrollbar-track {
		border: 1px solid ${Colors.background.blue};

		padding: 2px 1px;
		border-radius: 10px;
	}

	&::-webkit-scrollbar {
		width: 10px;
		position: absolute;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		margin-left: 10rem;
		background-color: ${Colors.background.blue};

	}
`;


export const TheadCustom = styled.thead`

    border-radius: 8px;
    color: ${Colors.text.white};
    height: 2.5rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1); //(0px 4px 4px rgba(0, 0, 0, 0.1));

    th {
        font-size: 14px;
				background: ${Colors.background.blue};
        font-weight: 600;
    }

    th:first-child{
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;

    }

    th:last-child{
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

		th {
        text-align: start;
        padding: 0 1rem;
        }
    `;

export const TbodyCustom = styled.tbody`
    color:${Colors.text.dark};
    font-weight: 500;

    td {
        padding: 0.5rem 1rem;
    }

    td:first-child{
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    td:last-child{
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    tr {
        background: ${Colors.input.background};
        height: 1.20rem;
        &:hover {
            background: ${Colors.input.placeholder};
						opacity:50%;
            color: white;
        }
    }
`;
