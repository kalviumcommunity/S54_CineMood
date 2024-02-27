import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../../context/ParentContext'
import M_MovieCard from './M_MovieCard'

const UserMovies = () => {
    const [selectedUser, setSelectedUser] = useState("Admin")
    const [users, setUsers] = useState([])
    const {movieList, MListRender, setMovieList} = useContext(AppContext)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://cinemood-b811.onrender.com/user');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
            const fetchMovies = async () => {
              try {
                const response = await fetch('https://cinemood-b811.onrender.com/movies');
                if (!response.ok) {
                  throw new Error('Failed to fetch movies');
                }
        
                const data = await response.json();
                setMovieList(data.data);
                setIsLoading(false)
              } catch (error) {
                console.error('Error fetching movies:', error.message);
              }
            };
        
            fetchMovies();
    }, [MListRender]);

    return (
        <div>
            <Box bg="#00050D">
                <Box bg="#00050D" py={4} boxShadow="md" w="100%">
                    <Box w="93%" display="flex" alignItems="center" mx="auto">
                        <Text fontSize="xl" color="white" fontWeight="bold">
                            Sort Movies by
                        </Text>
                        <Text fontSize="xl" color="#1a98ff" fontWeight="bold" pl="3" m="0">
                            User Name
                        </Text>
                    </Box>
                </Box>

                <Box ml="4%">
                    <select onChange={(e) => setSelectedUser(e.target.value)}>
                        <option value="Admin">Admin</option>
                        {users.map((user, id) => {
                            return <option key={id} value={`${user.Name}`}>{user.Name}</option>
                        })}
                    </select>
                </Box>
                <Flex wrap="wrap" justifyContent={'space-around'} bg="#00050D" rowGap={10} pt={8}>
                    {
                        movieList.filter((movie) => {
                            console.log(movie.CreatedBy, selectedUser)
                            return movie.CreatedBy == selectedUser
                        }).map((movie_data, id) => {
                            return <M_MovieCard key={id} Movie_Data={movie_data} />
                        })
                    }
                </Flex>
            </Box>
        </div>
    )
}

export default UserMovies
