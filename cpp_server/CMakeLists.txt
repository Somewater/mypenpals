cmake_minimum_required(VERSION 3.5)
project(cpp_server)

set(CMAKE_CXX_STANDARD 17)

option(BUILD_SHARED_LIBS "Build shared libraries." ON)

find_package(OpenSSL REQUIRED)
find_package(ZLIB REQUIRED)

if(NOT LIBUV_INCLUDE_DIR)
    find_path(LIBUV_INCLUDE_DIR uv.h)
endif()
if(NOT LIBUV_LIBRARY)
    find_library(LIBUV_LIBRARY NAMES uv uv1)
endif()

file(GLOB SOURCES uWebSockets/src/*.cpp)
add_library(uWS ${SOURCES})
target_include_directories(uWS PUBLIC uWebSockets/src)

target_include_directories(uWS PUBLIC ${LIBUV_INCLUDE_DIR})
target_include_directories(uWS PUBLIC ${ZLIB_INCLUDE_DIRS})
target_include_directories(uWS PUBLIC ${OPENSSL_INCLUDE_DIR})
target_link_libraries (uWS LINK_PUBLIC ${LIBUV_LIBRARY})
target_link_libraries (uWS LINK_PUBLIC ${OPENSSL_SSL_LIBRARY})
target_link_libraries (uWS LINK_PUBLIC ${OPENSSL_CRYPTO_LIBRARY})
target_link_libraries (uWS LINK_PUBLIC ${ZLIB_LIBRARY})

if (UNIX)
    target_link_libraries (uWS LINK_PUBLIC pthread)
    install (TARGETS uWS DESTINATION /usr/lib)
    file(GLOB HEADERS uWebSockets/src/*.h)
    install(FILES ${HEADERS} DESTINATION include/uWS)
endif (UNIX)


set(SOURCE_FILES chat.cpp)
add_executable(chat ${SOURCE_FILES})
target_include_directories(chat PUBLIC uWebSockets/src)
target_link_libraries (chat LINK_PUBLIC uWS)
