import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";


const Todos = () => {
    return (
        <Container>
            <div className="flex justify-between mt-32">
                <div className="flex items-center gap-3">
                    <SearchIcon></SearchIcon>
                    <Input placeholder="search"></Input>
                </div>
                <div>
                    <Button>Add Todo</Button>
                </div>
            </div>
            <div className="border-b border-gray-400 my-5"/>
        </Container>
    );
};

export default Todos;