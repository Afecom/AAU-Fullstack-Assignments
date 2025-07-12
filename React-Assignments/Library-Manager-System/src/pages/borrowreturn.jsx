import { faArrowsTurnToDots } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BorrowsReturns from "../borrowsreturnscont"
import { borrowsReturnsContext } from "../App"
import { useContext } from "react"

function BorrowReturn(){
    const borrowsReturns = useContext(borrowsReturnsContext)?.data ?? []

    return(
        <div className="p-4 md:p-8">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl md:text-4xl">Borrow & Return</h1>
                    <p className="md:text-2xl text-gray-500">Manage book borrowing and return operations</p>
                </div>
                <div className="flex gap-2 md:gap-4">
                    <button className="bg-black text-white py-2 px-3 rounded-md flex items-center gap-4 text-sm md:text-xl md:px-6 md:py-6 hover:bg-gray-900 hover:cursor-pointer h-10 text-nowrap">
                        <FontAwesomeIcon icon={faArrowsTurnToDots} />
                        Borrow Book
                    </button>
                    <button className="py-2 px-3 rounded-md flex items-center gap-4 text-md md:text-xl md:px-6 md:py-6 bg-white hover:cursor-pointer hover:bg-gray-200 h-10 text-nowrap">
                        <FontAwesomeIcon icon={faArrowsTurnToDots} />
                        Return Book
                    </button>
                </div>
            </div>
            {borrowsReturns.map((bR, index) => {
                return(
                    <BorrowsReturns 
                        key={bR.id}
                        title={bR.book.title}
                        member={bR.member.name}
                        borrowed={bR.borrow_date}
                        due={bR.due_date}
                        returned={bR.return_date ? true : false}
                        status={new Date().toISOString().split('T')[0] > bR.due_date ? "overdue" : "active"}
                    />
                )
            })}
        </div>
    )
}
export default BorrowReturn